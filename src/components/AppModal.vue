<template>
  <div class="modal">
    <h1 class="name">{{ customerData.name }}</h1>
    <div>{{ customerData.phone }}</div>
    <div class="email">{{ customerData.email }}</div>
    <div class="type">{{ customerData.typeOfApartments }}</div>
    <div class="guests-info">
      <div class="guests-info_title">Number of guests</div>
      <div class="guests-info_item">
        Adults: {{ customerData.guestInfo.adults }}
      </div>
      <div class="guests-info_item">
        Children: {{ customerData.guestInfo.children }}
      </div>
    </div>
    <app-button v-on:click="closeModal">Close</app-button>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  name: "app-modal",
  components: { AppButton },

  computed: {
    customerData() {
      return this.$store.state.roomDetails;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("setRoomDetails", null);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  text-align: start;
  left: 50%;
  top: 30%;
  z-index: 500;
  background-color: #fff;
  padding: 15px 15px 25px 15px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.name {
  font-size: 26px;
}
.email {
  margin-bottom: 15px;
}
.type {
  margin-bottom: 15px;
}
.guests-info {
  margin-bottom: 30px;
  &_title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }
}
</style>
