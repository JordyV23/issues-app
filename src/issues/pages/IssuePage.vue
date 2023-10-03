<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import IssueCard from 'src/issues/components/issue-list/IssueCard.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { id = '' } = route.params;
</script>

<template>
  <LoaderSpinner />
  <router-link class="text-white" to="/"> Go Back</router-link>

  <!-- Header del Issue -->
  <IssueCard />

  <!-- Comentarios -->
  <LoaderSpinner :thickness="1" size="2rem" :show-text="false" />

  <div class="column">
    <span class="text-h4 q-mb-md"> Comments (5) </span>
    <IssueCard v-for="comment of 5" :key="comment" />
  </div>
</template>

<style scoped></style>
