<template lang="">
  <v-col cols="12">
    <v-card :title="photo.title">
      <v-img :width="500" aspect-ratio="1/7" cover :src="photo.thumbnailUrl">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
      <v-card-actions>
        <v-btn @click="openPhoto">open photo</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    photo: Object,
  },
  methods: {
    openPhoto() {
      this.$emit("openPhoto", this.photo);
    },
  },
};
</script>
<style lang=""></style>
