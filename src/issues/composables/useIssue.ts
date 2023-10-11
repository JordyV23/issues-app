import { githubApi } from 'src/api/githubApi';
import { Issue } from '../interfaces/Issues';
import { useQuery, useQueryClient } from '@tanstack/vue-query';

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}}`);
  return data;
};

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(
    `/issues/${issueNumber}}/comments`
  );
  return data;
};

interface Options {
  //Autoload issue and comments
  autoload?: boolean;
}

const useIssue = (issueNumber: number, options?: Options) => {
  const { autoload = true } = options || {};

  const queryClient = useQueryClient();

  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssue(issueNumber),
    { staleTime: 1000 * 60, enabled: autoload }
  );

  const issueCommentsQuery = useQuery(
    ['issue', issueNumber, 'comments'],
    () => getIssueComments(issueNumber),
    { staleTime: 1000 * 60 }
  );

  const prefetchIssue = (issueNumber: number) => {
    queryClient.prefetchQuery(
      ['issue', issueNumber],
      () => getIssue(issueNumber),
      { staleTime: 1000 * 60 }
    );

    queryClient.prefetchQuery(
      ['issue', issueNumber, 'comments'],
      () => getIssueComments(issueNumber),
      { staleTime: 1000 * 60 }
    );
  };

  const setIssueCacheData = (issue: Issue) => {
    queryClient.setQueryData(['issue', issue.number], issue);
  };

  return {
    issueQuery,
    issueCommentsQuery,

    //Methods
    prefetchIssue,
    setIssueCacheData,
  };
};

export default useIssue;
