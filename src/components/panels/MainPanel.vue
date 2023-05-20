<template lang="">
  <div class="main_filter v-container elevation-2">
    <v-row no-gutters>
      <v-col cols="4">
        <v-row class="main_filter--waypoints_wrapper" no-gutters>
          <label
            class="dp-label dp-field-label"
            :class="[
              date_forward === null ? 'data-empty' : 'data-enter',
              date_forward_isopen ? 'date-active' : 'date-inactive',
            ]"
            >Потребуется бокс вместимостью</label
          >
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-row class="main_filter--datesearch" no-gutters>
          <v-col cols="9" class="d-flex">
            <div class="dp-field__field v-input v-input--density-default">
              <label
                class="dp-label dp-field-label"
                :class="[
                  date_forward === null ? 'data-empty' : 'data-enter',
                  date_forward_isopen ? 'date-active' : 'date-inactive',
                ]"
                >Стоимость комплектующих</label
              >
            </div>
            <div class="dp-field__field v-input">
              <label
                class="dp-label dp-field-label"
                :class="[
                  date_backward === null ? 'data-empty' : 'data-enter',
                  date_backward_isopen ? 'date-active' : 'date-inactive',
                ]"
                >Стоимость проектирования</label
              >
            </div>
            <div class="d-none check-dates">
              {{ date_forward }}
              <br />
              {{ date_backward }}
            </div>
          </v-col>
          <v-col cols="3" class="pa-0">
            <v-btn
              block
              variant="plain"
              class="search_btn bg-grey-darken-1 h-100"
            >
              Заказать
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- <SearchForm /> -->
  </div>
</template>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import SearchForm from "@/components/panels/SearchForm.vue";

import { ref } from "vue";
const dateRef = ref();

export default {
  components: { VueDatePicker, SearchForm },
  data() {
    return {
      tiket_startpoint: "",
      ticket_endpoint: "",
      newFilter: null,
      date_forward: null,
      date_forward_isopen: false,
      date_backward: null,
      date_backward_isopen: false,
    };
  },
  methods: {
    doReverseWay() {
      let temp = this.ticket_endpoint;
      this.ticket_endpoint = this.tiket_startpoint;
      this.tiket_startpoint = temp;
    },
  },
};
</script>
<style lang=""></style>
