<script setup lang="ts">
import type { button } from '../interfaces/button';

interface Props {
  buttons: button[];
}

const buttons = defineProps<Props>();
</script>

<template>
  <div class="fab">
    <q-btn
      v-for="button in buttons.buttons"
      round
      :key="button.icon"
      :color="button.color"
      :icon="button.icon"
      :size="button.size"
      @click="button.action"
    />
  </div>
</template>

<style scoped>
.fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
