<template lang="">
  <v-navigation-drawer width="525" class="left-sidebar pt-6">
    <img class="pl-2" alt="PSC logo" src="/images/sbor.png" />
    <v-row class="main_filter--add_filters" no-gutters>
      <v-col >
        <v-btn
          block
          variant="plain"
          class="add_filters--btn bg-grey-lighten-3 justify-start pl-6"
          :elevation="0"
        >
          <v-icon start icon="mdi mdi-tune-variant"></v-icon>
          Расширенные характеристики
        </v-btn>
      </v-col> 
    </v-row> 
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({ 
    submenu_notification: [
      ["Сообщения в заказах", ""],
      ["Темат. переписка", ""],
      ["Извещения", "1"],
    ],
    submenu_documents: [["Исходящие"], ["Входящие"]],
    submenu_company: [
      ["Профиль компании"],
      ["Сотрудники"],
      ["Аналитика"],
      ["Отделы"],
    ],
  }),
};
</script>
<style lang=""></style>
