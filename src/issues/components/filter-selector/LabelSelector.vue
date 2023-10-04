<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import useLabels from '../../composables/useLabels';
// import { toRef } from 'vue';

const { data, isLoading } = useLabels();
</script>

<template>
  <div class="q-mt-md">
    <LoaderSpinner
      size="50px"
      :thickness="1"
      :show-text="false"
      v-if="isLoading"
    />

    <q-chip
      v-else
      v-for="label of data"
      :key="label.id"
      :style="{ color: `#${label.color}` }"
      outline
      clickable
    >
      {{ label.name }}
    </q-chip>
  </div>
</template>

<style scoped></style>
