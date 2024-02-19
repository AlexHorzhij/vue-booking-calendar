<template>
  <button type="button" class="button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button",
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: #1a2b47;
  height: 36px;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 15px;
}
</style>
