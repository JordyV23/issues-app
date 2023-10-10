import { useQuery } from '@tanstack/vue-query';
import { Issue, State } from '../interfaces/Issues';
import { githubApi } from 'src/api/githubApi';
import { useIssuesStore } from 'src/stores/issues';
import { storeToRefs } from 'pinia';

const getIssues = async (labels: string[], state: State): Promise<Issue[]> => {
  const params = new URLSearchParams();

  params.append('per_page', '10');

  if (state) params.append('state', state);
  if (labels.length > 0) {
    const labelsString = labels.join(',');
    params.append('labels', labelsString);
  }

  const { data } = await githubApi.get<Issue[]>('/issues', {
    params,
  });

  return data;
};

const useIssues = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = storeToRefs(issuesStore);

  const issuesQuery = useQuery(['issues', { labels, state }], () =>
    getIssues(labels.value, state.value)
  );

  return {
    issuesQuery,
  };
};

export default useIssues;
