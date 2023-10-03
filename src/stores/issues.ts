import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIssuesStore = defineStore('Issues', () => {
  const state = ref('');
  const labels = ref<string[]>([]);

  return {
    //State properties
    state,
    labels,

    //Getters

    //Actions

    toggleLable(labelName: string) {
      throw new Error('Metodo no implementado');
    },
  };
});
