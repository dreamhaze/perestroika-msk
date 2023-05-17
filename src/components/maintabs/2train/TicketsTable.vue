<template lang="">
  <v-data-table :headers="headers" :items="train_tickets" class="elevation-my">
    <template v-slot:item.details="{ item }">
      <v-btn
        variant="plain"
        class="search-result--show-more"
        @click="clickShowTicket(item)"
      >
        {{ item.raw.details }}
        <v-icon icon="mdi-chevron-down"></v-icon>
      </v-btn>
    </template>
    <!-- прячем дефолтный футер с пагинацией -->
    <template v-slot:bottom> </template>
  </v-data-table>
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
    clickShowTicket(item) {
      console.log(item);
      this.$emit("clickShowTicket", item);
    },
  },
};
</script>
