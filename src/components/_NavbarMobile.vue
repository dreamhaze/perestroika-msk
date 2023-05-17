<template lang="">
  <v-app-bar color="orange" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>PSC</v-app-bar-title>
    <v-btn class="ml-3"><router-link to="/">Главная</router-link></v-btn>
    <v-btn class="ml-3"><router-link to="/traintickets">Фотографии</router-link>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {};
</script>
<style lang=""></style>
