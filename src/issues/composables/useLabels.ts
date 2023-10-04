import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Label } from '../interfaces/label';
// import { ref } from 'vue';
// import { watch } from 'fs';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi<Label[]>('/labels?per_page=100');
  // console.log(data);
  return data;
};

const useLabels = () => {
  const { data, isLoading, isError } = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useLabels;
