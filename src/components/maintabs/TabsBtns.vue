<template lang="">
  <div class="v-col v-col-12">
    <div class="maintabs-container">
      <v-tabs v-model="active_tab" align-tabs="start">
        <v-sheet>
          <v-slide-group show-arrows>
            <v-slide-group-item
              v-for="(tab, i) in tabs"
              v-slot="{ isSelected, toggle }"
            >
              <v-tab :ripple="false" :key="i" :value="i" @click="clickOnTab(i)">
                {{ tab.title }}
              </v-tab>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-tabs>

      <v-btn class="individual_order" :elevation="0">
        Индивидуальный заказ
        <v-icon start icon="psc-app-icon psc-app-icon__btn-plus"></v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
// import PanelApp from "@/components/panels/PanelAppAccount2.vue";
export default {
  // components: {
  //   PanelApp,
  // },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    curr_tab: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    active_tab: null,
  }),
  methods: {
    clickOnTab(index) {
      this.$emit("getCurrTab", index);
    },
  },
  mounted() {
    this.active_tab = this.curr_tab; 
  },
};
</script>
<style lang=""></style>
