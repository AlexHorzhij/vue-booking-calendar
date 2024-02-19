<template>
  <div class="row">
    <div class="room-name">{{ roomName }}</div>
    <template v-for="date in $store.state.week">
      <app-room-data-cell
        :key="date"
        :date="date"
        :roomName="roomName"
        :reservation="reservation"
      />
    </template>
  </div>
</template>

<script>
import AppRoomDataCell from "./AppRoomDataCell.vue";

import * as dayjs from "dayjs";

var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

export default {
  name: "app-room",
  components: { AppRoomDataCell },
  props: {
    roomName: String,
    reservation: Array,
  },
};
</script>

<style lang="scss" scoped>
.room-name {
  display: table-cell;
  padding: 10px;
  width: 200px;
  border: 1px solid #f6f6f6;
  color: #9fc78f;
  vertical-align: middle;
}
.row {
  position: relative;
  display: table-row;
}
</style>
