<template>
  <v-app class="psc-app">
    <v-layout>
      <v-main>
        <NavSidebar />
        <SmatdeskPage />
      </v-main>
    </v-layout>
    <SearchFilter />
  </v-app>
</template>

<script>
// import NavbarMobile from "@/components/NavbarMobile.vue";
import SearchFilter from "@/components/search/SearchFilter.vue";
import SmatdeskPage from "./components/SmatdeskPage.vue";
import NavSidebar from "./components/NavSidebar.vue";

export default {
  components: {
    SearchFilter,
    NavSidebar,
    SmatdeskPage,
  },
  name: "PSCApp",
};
</script>

<style lang="scss"></style>
