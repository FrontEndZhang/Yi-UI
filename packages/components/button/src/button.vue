<template>
  <button>{{ text }}</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const text = ref("click me! ooooo yea");

defineOptions({
  name: 'YiButton',
})
</script>

<style lang="css" scoped>
  button {
    color: red;
  }
</style>
