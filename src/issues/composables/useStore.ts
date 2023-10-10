import { storeToRefs } from 'pinia';
import { useIssuesStore } from 'src/stores/issues';

const useStore = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = storeToRefs(issuesStore);

  return {
    //Propiedades Reactivas
    labels,
    state,
  };
};

export default useStore;
