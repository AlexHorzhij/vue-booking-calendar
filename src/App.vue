<template>
  <div id="app">
    <AppCalendar />
  </div>
</template>

<script>
import AppCalendar from "./components/AppCalendar.vue";

export default {
  name: "App",
  components: {
    AppCalendar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>
