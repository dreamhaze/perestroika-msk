<template lang="">
  <v-dialog max-width="570">
    <v-card>
      <v-card-title>{{ full_title }}</v-card-title>
      <v-card-text>
        <v-img :src="photo.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  created() {},
  computed: {
    full_title() {
      return `[${this.photo.id}] ${this.photo.title}`;
    },
  },
};
</script>
<style lang="scss">
$dialog-border-radius: 300px;
</style>
