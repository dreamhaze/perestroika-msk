<template>
  <div class="container">
    <h1>Конфигуратор ГРЩ</h1>
    <div class="container">
      <div class="row">
        <hr />
        <button type="button" class="btn btn-primary" @click="addLayer">
          Добавить слой
        </button>
        <hr />

        <div class="cell-3 cell-3-el cell-12-lg col flex-top">
          <LeftSide :layers="layers" />
        </div>
        <div class="cell-9 cell-9-el cell-12-lg">
          <!-- <n-divider vertical /> -->
          <RightSide
            :hasLayers="hasLayers"
            :layers="layers"
            :layersTypes="layersTypes"
            @layersChange="updateLayers"
          />
        </div>
      </div>
      <hr />
      <div class="alert alert-success price" v-show="hasLayers">
        <span class="price">{{ price }} руб.</span>
        <button type="button" class="btn btn-warning">Заказать</button>
      </div>
    </div>
  </div>
</template>
<script>

import LeftSide from "@/components/layout/LeftSide.vue";
import RightSide from "@/components/layout/RightSide.vue";
export default {
  components: {
    LeftSide,
    RightSide,
  },
  data() {
    return {
      layers: [],
      layersTypes: {
        biscuit: {
          price1sm: 50,
          label: "корпус с din-рейками",
        },
        beze: {
          price1sm: 100,
          label: "двухполюсный вводной автомат на 32 Ампер",
        },
        curd: {
          price1sm: 60,
          label: "нулевая PEN-шина",
        },
      },
      defaultLayer: "biscuit",
      defaultHeight: 5,
    };
  },
  computed: {
    hasLayers() {
      return this.layers.length > 0;
    },
    price() {
      let sum = 0;

      for (let i = 0; i < this.layers.length; i++) {
        let layer = this.layers[i];
        let ltype = this.layersTypes[layer.type];

        sum += layer.height * ltype.price1sm;
      }

      return sum;
    },
  },
  methods: {
    addLayer() {
      this.layers.push({
        type: this.defaultLayer,
        height: this.defaultHeight,
      });
    }, 
    updateLayers(newLayers) {
      Object.assign(this.layers, newLayers);
    },
  },
};
</script>
<style lang=""></style>
