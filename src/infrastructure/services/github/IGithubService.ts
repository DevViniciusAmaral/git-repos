import { IGithubOfflineService } from "./offline/models/IGithubOfflineService";
import { IGithubOnlineService } from "./online/models/IGithubOnlineService";

export interface IGithubService {
  online: IGithubOnlineService;
  offline: IGithubOfflineService;
}
