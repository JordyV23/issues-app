<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from '../components/filter-selector/FilterSelector.vue';
import IssueList from '../components/issue-list/IssueList.vue';
import useIssues from '../composables/useIssues';
import FloatingButtons from '../components/FloatingButtons.vue';
import { sizes } from '../interfaces/button';
const { issuesQuery } = useIssues();

const addIssue = () => {
  console.log('Add Issue');
};
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
      <FilterSelector />
    </div>

    <div class="col-xs-12 col-md-8">
      <!-- TODO: Loader -->
      <LoaderSpinner v-if="issuesQuery.isLoading.value" />

      <!-- TODO: IssueList - Array IssueCard -->
      <IssueList v-else :issues="issuesQuery.data!.value || []" />
    </div>
  </div>

  <!-- Floating Buttons -->
  <FloatingButtons
    :buttons="[
      { icon: 'add', size: sizes.lg, action: addIssue, color: 'primary' },
    ]"
  />
</template>

<style scoped></style>
