<script lang="ts" setup>
defineProps<{ description: string }>();
</script>

<template>
  <p mb-3 text="lg">
    {{ description }}
  </p>
</template>
