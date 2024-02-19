<template>
  <div>
    <app-controls />
    <app-modal v-if="this.$store.state.roomDetails" />

    <div class="calendar">
      <div class="head">
        <div class="cell cell-first"></div>
        <div
          :class="{ today: day === currentDay }"
          class="cell cell-date"
          v-for="day in this.$store.state.week"
          :key="day"
        >
          {{ day }}
        </div>
      </div>
      <AppRoomsList />
    </div>
  </div>
</template>

<script>
import * as dayjs from "dayjs";
import AppRoomsList from "./AppRoomsList.vue";
import AppControls from "./AppControls.vue";
import AppModal from "./AppModal.vue";
import bookings from "@/data/bookings";

const weekOfYear = require("dayjs/plugin/weekOfYear");
const isoWeek = require("dayjs/plugin/isoWeek");
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

export default {
  name: "app-calendar",
  components: { AppRoomsList, AppControls, AppModal },
  data() {
    return {
      bookings,
      reservation: {},
      currentDay: null,
    };
  },
  watch: {
    "$store.state.currentWeekNumber": {
      handler: "filterReservations",
      deep: true,
    },
  },
  // Choosing dates for the desired week

  methods: {
    weekDates() {
      const weekDates = [];
      for (let i = 1; i <= 7; i++) {
        const day = dayjs()
          .week(this.$store.state.currentWeekNumber)
          .isoWeekday(i);
        weekDates.push(day.format("YYYY-MM-DD"));
      }
      this.$store.commit("setWeekDays", weekDates);
    },
    // Filtering reservations for the desired week
    filterReservations() {
      const reservation = {};
      this.weekDates();
      const { week } = this.$store.state;
      bookings.forEach((element) => {
        if (!reservation[element.roomDetails.name]) {
          reservation[element.roomDetails.name] = [];
          if (this.currentWeekReservations(element.start, element.end, week)) {
            reservation[element.roomDetails.name].push(element);
          }
        } else {
          if (this.currentWeekReservations(element.start, element.end, week)) {
            reservation[element.roomDetails.name].push(element);
          }
        }
      });

      this.$store.commit("setCurrentReservation", reservation);
    },
    currentWeekReservations(dateStart, dateEnd, week) {
      const inside = (date, week) =>
        dayjs(date).isAfter(dayjs(week[0])) &&
        dayjs(date).isBefore(dayjs(week[6]));

      const insideWeek = inside(dateStart, week) || inside(dateEnd, week);

      const includeWeek =
        dayjs(dateStart).isBefore(dayjs(week[0])) &&
        dayjs(dateEnd).isAfter(dayjs(week[6]));
      return insideWeek || includeWeek;
    },
  },
  beforeMount() {
    const currentDay = dayjs().startOf("day").format("YYYY-MM-DD");
    this.currentDay = currentDay;
    const currentWeek = dayjs(currentDay).week();
    this.$store.commit("setWeekNumber", currentWeek);
    this.filterReservations();
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  display: table;
}
.head {
  display: table-row;
}
.table {
  display: table-row-group;
}
.row {
  display: table-row;
}
.cell {
  display: table-cell;
  padding: 10px;
  width: 200px;
  border: 1px solid #f6f6f6;

  &-first {
    border-top: none;
    border-left: none;
  }
  &-date {
    font-weight: 700;
  }
}
.today {
  background-color: #f1ffe4;
}
.table .cell {
  height: 100px;
  text-align: center;
  vertical-align: middle;
}
</style>
