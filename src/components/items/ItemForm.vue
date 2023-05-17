<template lang="">
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title" label="Станция отправления"> </v-text-field>
      <v-file-input v-model="img" accept="image/*" label="Станция прибытия"></v-file-input>
      <v-btn @click="addPhoto" color="blue-grey" >
        Поиск
      </v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    title: '',
    img: null,
  }),
  methods: {
    addPhoto() {
      console.log(this.img[0]);
      const reader = new FileReader();
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
          thumbnailUrl: reader.result,
        };
        this.$emit("addPhoto", photo);
      };
      reader.readAsDataURL(this.img[0]);
    },
 
  },
};
</script>
<style lang=""></style>
