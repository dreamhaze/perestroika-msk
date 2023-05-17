<template> 
  <v-app>
    <v-app-bar app>
       <v-app-bar-nav-icon @click="drawer = true" 
                           class="d-flex d-sm-none" //Add this class to show menu icon only on small screen
                           ></v-app-bar-nav-icon>
        <v-toolbar-title>Your Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
  
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex" //Add this class to show tabs only on medium screen and above
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
  
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        >
          <v-list-item v-for="(item, index) in items">
            <v-list-item-title @click="tab = index">{{ item }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation bar ends -->
    <v-content class="ma-5">
       <v-tabs-items v-model="tab" class="d-flex flex-column align-center">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          You are on {{ item }}
        </v-tab-item>
      </v-tabs-items>
    </v-content>
  </v-app> 
</template>

<script>
import NavbarMobile from "@/components/_NavbarMobile.vue";
import NavbarApp from "./components/_NavbarApp.vue";
export default {
  components: { NavbarMobile, NavbarApp },
  name: "PSCApp",
  data: () => ({
    leftMenu: [
      { icon: "mdi-history", text: "Заказы", link: "/" },
      { icon: "mdi-menu", text: "Смартдеск", link: "/traintickets" },
      { icon: "mdi-history", text: "Избранное", link: "/" },
      { icon: "mdi-history", text: "Уведомления", link: "/" },
      { icon: "mdi-history", text: "Документы", link: "/" },
      { icon: "mdi-history", text: "Компания", link: "/" },
      { icon: "mdi-history", text: "Отчеты", link: "/" },
      { icon: "mdi-history", text: "Настройки", link: "/" },
    ],
    drawer: false,
    tab: null,
      items: [
        'web', 'shopping', 'videos', 'images', 'news',
      ],
  }),
};
</script>

<style></style>
