<template>
  <button>{{ text }}</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const text = ref("click me!");

defineOptions({
  name: 'YiButton',
})
</script>
