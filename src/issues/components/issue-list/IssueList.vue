<script setup lang="ts">
import IssueCard from './IssueCard.vue';
import { Issue } from '../../interfaces/Issues';

interface Props {
  issues: Issue[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="row">
    <span id="nothing-message" v-if="!props.issues">
      There's nothing to show
    </span>
    <IssueCard v-for="issue of props.issues" :key="issue.id" :issue="issue" />
  </div>
</template>

<style scoped>
#nothing-message {
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
