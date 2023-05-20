<template lang="">
  <v-window-item>
    <v-container fluid no-gutters class="tab_window">
      <div class="d-flex flex-column mb-6">
        <v-sheet cols="12">
          {{ tab_window.id }}
          <br />
          --------
          <h1>{{ tab_window.title }}</h1>
          <p>
            {{ tab_window.body }}
          </p>
          <div class="d-flex flex-between">
            <span>Шаг {{ tab_window.step }} из {{ tabs.length }}</span>
            <v-btn
              append-icon="mdi mdi-arrow-right-thick"
              variant="tonal"
              @click="clickNextTab(tab_window.step)"
            >
              Следующий
            </v-btn>
          </div>
        </v-sheet>
      </div>
    </v-container>
  </v-window-item>
</template>
<script>
export default {
  components: {},
  props: {
    tab_window: {
      type: Object,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),
  methods: {
    clickNextTab(currStep) {
      let tabId;
      if ((currStep = this.tabs.length)) {
        tabId = 0;
      } else {
        tabId = currStep++;
      }
      console.log(currStep);
      console.log(this.tabs.length);
      console.log(tabId);
      this.$emit("clickNextTab", tabId);
    },
  },
};
</script>
<style lang=""></style>
