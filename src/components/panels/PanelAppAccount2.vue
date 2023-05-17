<template lang="">
  <div>
    150 000.00 RUB
    <v-list-item
      lines="one" 
      title="ИП Хмель Марина Валерьевна"
      subtitle="150 000.00 RUB"
    ></v-list-item>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "",
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
  }),
};
</script>
<style lang=""></style>
