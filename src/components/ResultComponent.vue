<template>
  <div>
    <h1>Result</h1>
    <div class="container">
      <router-link to="/"><n-button>back</n-button></router-link>
      <n-theme-editor> 
      </n-theme-editor>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { NThemeEditor } from "naive-ui";
import { NButton } from "naive-ui";

export default defineComponent({
  components: {
    NButton,
    NThemeEditor,
  },
});
</script>
