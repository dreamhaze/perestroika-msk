<template>
  <v-app class="psc-app">
    <v-layout>
      <v-main>
        <NavSidebar />
        <SmatdeskPage />
      </v-main>
    </v-layout>
    <MainPanel />
  </v-app>
</template>

<script>
// import NavbarMobile from "@/components/NavbarMobile.vue";
import MainPanel from "@/components/panels/MainPanel.vue";
import SmatdeskPage from "./components/SmatdeskPage.vue";
import NavSidebar from "./components/NavSidebar.vue";

export default {
  components: {
    MainPanel,
    NavSidebar,
    SmatdeskPage,
  },
  name: "PSCApp",
};
</script>

<style lang="scss"></style>
