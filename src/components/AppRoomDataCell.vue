<template>
  <div class="room-cell" :class="{ today: isToday }" ref="cell">
    <app-reserved
      v-if="todayStartReservation"
      :cellWidth="cellWidth"
      :customer="getTodayStartReservation"
      :date="date"
    />
    <app-reserved
      v-if="isFirstDayOfWeek && lastWeekStartReservation"
      :cellWidth="cellWidth"
      :customer="getLastWeekStartReservation"
      :date="date"
    />
  </div>
</template>

<script>
import AppReserved from "@/components/AppReserved.vue";
import * as dayjs from "dayjs";
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

export default {
  name: "app-room-data-cell",
  components: { AppReserved },
  props: {
    date: String,
    roomName: String,
    reservation: Array,
  },
  data() {
    return {
      todayStartReservation: null,
      lastWeekStartReservation: null,
      cellWidth: 0,
    };
  },
  watch: {
    "$store.state.currentWeekNumber": {
      handler: "filterReservations",
      deep: true,
    },
  },
  mounted() {
    this.filterReservations();

    window.addEventListener("resize", this.onResize);
  },
  methods: {
    filterReservations() {
      const { week } = this.$store.state;
      const reservation =
        this.$store.state.currentWeekReservations[this.roomName];
      if (!reservation.length) return;

      this.cellWidth = this.$refs.cell.clientWidth;

      reservation.forEach((item) => {
        if (dayjs(this.date).isSame(item.start)) {
          this.todayStartReservation = item;
        } else if (dayjs(item.start).isBefore(week[0])) {
          this.lastWeekStartReservation = item;
        }
      });
    },
    onResize() {
      this.cellWidth = this.$refs.cell.clientWidth;
    },
  },
  computed: {
    isToday() {
      return dayjs().startOf("day").format("YYYY-MM-DD") === this.date;
    },
    isFirstDayOfWeek() {
      const { week } = this.$store.state;
      return week[0] === this.date;
    },
    getTodayStartReservation() {
      return this.todayStartReservation;
    },
    getLastWeekStartReservation() {
      return this.lastWeekStartReservation;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
.room-cell {
  position: relative;
  display: table-cell;
  width: 200px;
  height: 70px;
  border: 0.5px solid #f6f6f6;
  box-sizing: border-box;
}
.today {
  background-color: #f1ffe4;
}
</style>
