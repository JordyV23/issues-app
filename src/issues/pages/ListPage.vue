<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">Github Issues</span>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-md-4">
      <!-- TODO: Filtros -->
      <!-- Filter Selector -->
    </div>

    <div class="col-xs-12 col-md-8">
      <!-- TODO: Loader -->
      <LoaderSpinner />

      <!-- TODO: IssueList - Array IssueCard -->
    </div>
  </div>
</template>

<style scoped></style>
