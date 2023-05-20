<template lang="">
  <v-row dense>
    <TabsBtns
      :tabs="tabs"
      :curr_tab="active_tab"
      @getCurrTab="getCurrTabParent"
    />
    <div class="v-col v-col-12">
      <v-window v-model="active_tab" class="oveflow-visible">
        <TabsWindows
          v-for="(window, i) in tabs"
          :key="i"
          :tabs="tabs"
          :tab_window="window"
          :value="i"
          @clickNextTab="getCurrTabParent"
        />
      </v-window>
    </div>
  </v-row>
</template>
<script>

import TabsBtns from "@/components/maintabs/TabsBtns.vue";
import TabsWindows from "@/components/maintabs/TabsWindows.vue";

export default {
  components: { 
    TabsBtns,
    TabsWindows,
  },
  data: () => ({
    active_tab: 0,
    tabs: [
      {
        id: 1313123,
        step: 1,
        title: "Авиабилеты",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        id: 24123123,
        step: 2,
        title: "ЖД Билеты",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 35431,
        step: 3,
        title: "Гостиницы",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 42351,
        step: 4,
        title: "Аэроэкспресс",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 575342,
        step: 5,
        title: "Автобусы",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 6342,
        step: 6,
        title: "Трансфер",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 732326661,
        step: 7,
        title: "Такси",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    ],
  }),
  methods: {
    // async fetchTodo() {
    //   const { data } = await this.axios.get(
    //     "https://jsonplaceholder.typicode.com/users/1/posts?_limit=5"
    //   );
    //   console.log(data);
    //   this.tabs.push(data);
    // },
    addPhotoParent(tabs) {
      this.tabs.push(tabs);
    },
    getCurrTabParent(tabId) {
      this.active_tab = tabId;
    },
  },
};
</script>
<style lang=""></style>
