import axios from 'axios';

export const githubApi = axios.create({
  //https://api.github.com/repos/facebook/react/labels?per_page=100
  baseURL: `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}`,
  headers: {
    // Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});
