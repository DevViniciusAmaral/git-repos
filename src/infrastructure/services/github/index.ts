import { githubOfflineService } from "./offline";
import { githubOnlineService } from "./online";
import { IGithubService } from "./IGithubService";

export const githubService: IGithubService = {
  online: githubOnlineService,
  offline: githubOfflineService,
};
