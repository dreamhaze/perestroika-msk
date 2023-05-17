<template lang="">
  <v-window-item>
    <v-container fluid no-gutters class="tab_window">
      <div class="d-flex flex-column mb-6">
        <SearchResult v-if="tab_window.title === 'ЖД Билеты'" />
        <v-sheet v-else cols="12">
          {{ tab_window.id }}
          <br />
          --------
          <h1>{{ tab_window.title }}</h1>
          <p>
            {{ tab_window.body }}
          </p>
        </v-sheet>
      </div>
    </v-container>
  </v-window-item>
</template>
<script>
import SearchResult from "@/components/search/SearchResult.vue";
export default {
  components: { 
    SearchResult,
  },
  props: {
    tab_window: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
};
</script>
<style lang=""></style>
