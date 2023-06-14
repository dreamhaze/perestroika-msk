<template>
  <div class="pmsk-app">
    <n-config-provider :theme="theme">
      <n-card>
        <n-space>
          <n-button @click="theme = darkTheme">Dark</n-button>
          <n-button @click="theme = null">Light</n-button>
        </n-space>
      </n-card>
      <router-view></router-view>
    </n-config-provider>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { darkTheme } from "naive-ui";
import { NButton } from "naive-ui";

export default defineComponent({
  components: {
    NButton, 
  },
  setup() {
    return {
      darkTheme,
      theme: ref(null),
    };
  },
});
</script>
