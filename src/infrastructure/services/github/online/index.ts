import { api } from "@infrastructure/api/github";
import { IGithubOnlineService } from "./models/IGithubOnlineService";

export const githubOnlineService: IGithubOnlineService = {
  getOwnerRepositories: ({ owner }) => api.get(`/users/${owner}/repos`),
};
