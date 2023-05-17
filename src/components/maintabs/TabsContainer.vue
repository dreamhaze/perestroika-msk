<template lang="">
  <v-row dense>
    <TabsBtns
      :tabs="tabs"
      :curr_tab="active_tab"
      @getCurrTab="getCurrTabParent"
    />
    <div class="v-col v-col-12">
      <v-window v-model="active_tab" class="oveflow-visible">
        <!-- transition="scroll-x-transition" -->
        <TabsWindows
          v-for="(window, i) in tabs"
          :key="i"
          :tab_window="window"
          :value="i"
        />
      </v-window>
    </div>

    <!-- <ItemForm @addPhoto="addPhotoParent" /> -->
  </v-row>
</template>
<script>
// import Item from "@/components/items/Item.vue";
// import ItemForm from "@/components/items/ItemForm.vue";
// import ItemDialog from "@/components/items/ItemDialog.vue";

import TabsBtns from "@/components/maintabs/TabsBtns.vue";
import TabsWindows from "@/components/maintabs/TabsWindows.vue";

export default {
  components: { 
    TabsBtns,
    TabsWindows,
  },
  data: () => ({
    photos: [],
    currentPhoto: {},
    dialogVisible: false,
    active_tab: 1,
    tabs: [
      {
        id: 1313123,
        title: "Авиабилеты",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        id: 24123123,
        title: "ЖД Билеты",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 35431,
        title: "Гостиницы",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 42351,
        title: "Аэроэкспресс",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 575342,
        title: "Автобусы",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 6342,
        title: "Трансфер",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        id: 732326661,
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
