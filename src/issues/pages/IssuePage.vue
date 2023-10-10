<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import IssueCard from 'src/issues/components/issue-list/IssueCard.vue';
import { useRoute } from 'vue-router';
import useIssue from '../composables/useIssue';

const route = useRoute();
const { id = '' } = route.params;

const { issueQuery } = useIssue(+id);
</script>

<template>
  <router-link class="text-white" to="/"> Go Back</router-link>

  <!-- Header del Issue -->
  <LoaderSpinner
    v-if="issueQuery.isLoading.value"
    :thickness="1"
    size="2rem"
    :show-text="false"
  />
  <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
  <p v-else>Issue with ID {{ id }} not found :c</p>

  <!-- Comentarios -->
  <LoaderSpinner :thickness="1" size="2rem" :show-text="false" />

  <div class="column">
    <span class="text-h4 q-mb-md"> Comments (5) </span>
    <!-- <IssueCard v-for="comment of 5" :key="comment" /> -->
  </div>
</template>

<style scoped></style>
