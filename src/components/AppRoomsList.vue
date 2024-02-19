<template>
  <div class="table">
    <template v-for="room in getRoomNames">
      <app-room :reservation="reservation[room]" :roomName="room" :key="room" />
    </template>
  </div>
</template>

<script>
import AppRoom from "./AppRoom.vue";
import * as dayjs from "dayjs";
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

export default {
  name: "app-room-list",
  components: { AppRoom },
  data() {
    return {
      reservation: this.$store.state.currentWeekReservations,
    };
  },
  watch: {
    "$store.state.currentWeekNumber": {
      handler: "setRes",
      deep: true,
    },
  },
  methods: {
    setRes() {
      this.reservation = this.$store.state.currentWeekReservations;
    },
  },
  computed: {
    getRoomNames() {
      return Object.keys(this.reservation);
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: table-row-group;
}

.room-cell {
  display: table-cell;
  padding: 10px;
  width: 200px;
  border: 1px solid #000;
}
</style>
