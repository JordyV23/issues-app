<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import IssueCard from 'src/issues/components/issue-list/IssueCard.vue';
import { useRoute } from 'vue-router';
import useIssue from '../composables/useIssue';

const route = useRoute();
const { id = '' } = route.params;

const { issueQuery, issueCommentsQuery } = useIssue(+id);
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
  <LoaderSpinner
    v-if="issueCommentsQuery.isLoading.value"
    :thickness="1"
    size="2rem"
    :show-text="false"
  />

  <div v-else class="column">
    <span class="text-h4 q-mb-md">
      Comments ( {{ issueCommentsQuery.data.value?.length || 0 }})
    </span>
    <IssueCard
      v-for="comment of issueCommentsQuery.data.value"
      :key="comment.id"
      :issue="comment"
    />
  </div>
</template>

<style scoped></style>
