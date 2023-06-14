<template>
  <!-- <n-carousel
    effect="custom"
    :transition-props="{ name: 'creative' }"
    show-arrow
    style="width: 100%; height: 70vh;"
  >
    <div class="carousel-img"> -->
      <div class="cell-6">
        <table class="table table-bordered" v-show="hasLayers">
          <tr>
            <th>Тип</th>
            <th>толщина (мм)</th>
            <th>Удалить</th>
          </tr>
          <tr v-for="(layer, i) in layers">
            <td>
              <select v-model="layer.type">
                <option v-for="(info, type) in layersTypes" :value="type">
                  {{ info.label }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                v-model.number="layer.height"
              />
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="removeLayer(i)"
              >
                X
              </button>
            </td>
          </tr>
        </table>
      </div>
    <!-- </div>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    />
  </n-carousel> -->
</template>
<script>
// import { NCarousel } from "naive-ui";
export default {
  // components: {
  //   NCarousel,
  // },

  props: {
    hasLayers: {
      type: Boolean,
      default: false,
    },
    layersTypes: {
      type: Object,
      default: () => {},
    },
    layers: {
      type: Array,
      default: [],
    },
  },

  data() {
    return { 
    }
  },
  methods: {
    
    removeLayer(i) {
      this.layers.splice(i, 1);
      this.$emit('layersChange', { layers: this.layers })
    },
    // updateSort(newValue) {
    //   this.sort = newValue
    //   this.$emit('layersChange', { sort: newValue })
    // },
    // updateIsHidden(newValue) {
    //   this.is_hidden = newValue
    //   this.$emit('layersChange', { is_hidden: newValue })
    // },
  }, 
};
</script>
<style lang=""></style>

<style scoped>
.carousel-img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}
</style>
