import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialState = {
  currentWeekNumber: null,
  currentDay: null,
  currentWeekReservations: null,
  week: [],
  roomDetails: null,
};
const store = new Vuex.Store({
  state: { ...initialState },
  mutations: {
    setWeekDays(state, weekData) {
      state.week = weekData;
    },
    setWeekNumber(state, week) {
      state.currentWeekNumber = week;
    },
    setCurrentDay(state, date) {
      state.currentDay = date;
    },
    setCurrentReservation(state, data) {
      state.currentWeekReservations = data;
    },
    setRoomDetails(state, data) {
      state.roomDetails = data;
    },
  },
});

export default store;
