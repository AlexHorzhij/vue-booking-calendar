<template>
  <div
    class="reserve"
    :class="className"
    v-bind:style="{ width: length + 'px' }"
    v-on:click="openModal"
    ref="label"
  >
    <span class="user-name">{{ customer.name }}</span>
  </div>
</template>

<script>
import * as dayjs from "dayjs";

var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

export default {
  name: "app-reserved",
  props: {
    customer: Object,
    date: String,
    cellWidth: Number,
  },
  data() {
    return {
      width: 0,
      length: 0,
      className: "",
    };
  },
  methods: {
    openModal() {
      this.$store.commit("setRoomDetails", this.customer);
    },
  },
  beforeMount() {
    const { week } = this.$store.state;
    this.width = this.cellWidth + 2.4;
    const endInWeek = dayjs(week[6]).diff(this.customer.end) > 0;
    const startInWeek = dayjs(week[0]).diff(this.customer.start) <= 0;

    if (!endInWeek && startInWeek) {
      this.length =
        (dayjs(week[6]).diff(this.customer.start) / 1000 / 60 / 60 / 24) *
          this.width +
        this.width / 2;
      this.className = "start";
    }
    if (endInWeek && startInWeek) {
      this.length =
        (dayjs(this.customer.end).diff(this.customer.start) /
          1000 /
          60 /
          60 /
          24) *
        this.width;
      this.className = "start-end";
    }
    if (!startInWeek && endInWeek) {
      this.length =
        (dayjs(this.customer.end).diff(week[0]) / 1000 / 60 / 60 / 24) *
          this.width +
        this.width / 2;
      this.className = "start-week";
    }
    if (!endInWeek && !startInWeek) {
      this.length = this.width * 7;
      this.className = "all-week";
    }
  },
};
</script>

<style lang="scss" scoped>
.reserve {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #5191fa;
  position: absolute;
  z-index: 10;
  bottom: 0;
  cursor: pointer;
}
.all-week {
  left: 0;
}
.start-week {
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.start {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  left: 50%;
}
.start-end {
  border-radius: 10px;
  left: 50%;
}
.user-name {
  font-size: 18px;
  font-weight: bold;
}
</style>
