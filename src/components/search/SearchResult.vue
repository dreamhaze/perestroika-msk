<template lang="">
  <v-col
    cols="12"
    class="search-result"
    :class="expand_mode ? 'expanded' : 'intable'"
  >
    <div class="mb-2 d-flex justify-space-between">
      <div class="text-subtitle pr-2">
        ЭЛЕКТРОЩИТ ДЛЯ:  
      </div>  
    </div> 
  </v-col>
</template>
<script>
import TicketsTable from "@/components/maintabs/2train/TicketsTable.vue";
import TicketDetails from "@/components/maintabs/2train/TicketDetails.vue";
export default {
  components: {
    TicketsTable,
    TicketDetails,
  },
  data: () => ({
    expand_mode: true,
    view_mode: true,
    expand_panels: ["TicketsTable"],
  }),
  methods: {
    showhide_ticket(target) {
      this.expand_mode = this.expand_mode ? false : true;
      console.log(target);
    },
  },
  watch: {
    expand_mode() {
      if (this.expand_mode) {
        this.expand_panels = ["TicketsTable"];
      } else {
        this.expand_panels = ["TicketDetails"];
      }
    },
    expand_panels() {
      if (this.expand_panels.length !== 1) {
        this.expand_panels = ["TicketsTable"];
      }
    },
  },
  mounted() {
    this.expand_mode = this.expand_panels === ["TicketsTable"] ? true : false;
  },
};
</script>
<style lang=""></style>
