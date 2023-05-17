<template lang="">
  <v-row no-gutters class="py-4">
     
  </v-row>
  <v-row class="absolute">
    <v-col cols="12"> 
    </v-col>
  </v-row>
  <v-card class="ticket_detail elevation-2">
    <v-row no-gutters>
       
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    headers: [
      { title: "Время отбытия", key: "t_in" },
      { title: "Время прибытия", key: "t_out" },
      { title: "Время в пути", key: "t_diff" },
      { title: "Поезд", key: "train" },
      { title: "Стоимость", key: "price" },
      {
        title: "",
        align: "end",
        sortable: false,
        key: "details",
      },
    ],
    train_tickets: [
      {
        t_in: "15:50",
        t_out: "17:20",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "5 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "5 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "11 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "20 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "40 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "25 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "30 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "5 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "16:20",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "19 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "5:18",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "170 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "25 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "25 000 RUB",
        details: "Подробнее",
      },
      {
        t_in: "15:50",
        t_out: "23:00",
        t_diff: "1ч 30 мин",
        train: "768А Сапсан",
        price: "25 000 RUB",
        details: "Подробнее",
      },
    ],
  }),
  methods: {
    clickHideTicket(event) {
      console.log("item");
      this.$emit("clickHideTicket", event.target);
    },
  },
};
</script>
