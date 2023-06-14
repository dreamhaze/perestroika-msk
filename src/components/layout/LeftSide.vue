<template>
  <div>
    <div class="cell-6-sm">
      <div class="cake" v-for="(layer, i) in layers">
        <div
          class="layer"
          :class="'layer-' + layer.type"
          :style="{ height: layer.height * 10 + 'px' }"
          @click="layer.height++"
          @contextmenu.prevent="
            layer.height = layer.height > 1 ? layer.height - 1 : layer.height
          "
        ></div>
      </div>
    </div>
    <router-link to="/result"><n-button>test page</n-button></router-link>
  </div>
</template>
<script>
import { NButton } from "naive-ui";
export default {
  components: {
    NButton,
  },
  props: { 
    layers: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style lang=""></style>
