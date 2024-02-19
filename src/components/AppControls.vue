<template>
  <div class="controls">
    <app-button class="button" v-on:click="onPreviousWeek">
      <ArrowIcon class="arrow-previous" />
    </app-button>
    <app-button class="button" v-on:click="onNextWeek">
      <ArrowIcon class="arrow" />
    </app-button>
    <app-button class="button" v-on:click="onToday">Today</app-button>
  </div>
</template>

<script>
import * as dayjs from "dayjs";

import ArrowIcon from "./ArrowIcon.vue";
import AppButton from "./AppButton.vue";

export default {
  name: "app-controls",
  components: { ArrowIcon, AppButton },
  methods: {
    onNextWeek() {
      this.$store.commit(
        "setWeekNumber",
        this.$store.state.currentWeekNumber + 1
      );
    },
    onPreviousWeek() {
      this.$store.commit(
        "setWeekNumber",
        this.$store.state.currentWeekNumber - 1
      );
    },
    onToday() {
      const currentDay = dayjs().startOf("day").format("YYYY-MM-DD");
      console.log("currentDay: ", currentDay);
      const currentWeek = dayjs(currentDay).week();
      console.log("currentWeek: ", currentWeek);
      this.$store.commit("setCurrentDay", currentDay);
      this.$store.commit("setWeekNumber", currentWeek);
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 15px;
}
.button {
  background-color: #1a2b47;
  height: 30px;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  padding: 0 10px;
}
.arrow {
  fill: #fff;
}
.arrow-previous {
  transform: rotate(180deg);
  fill: #fff;
}
</style>
