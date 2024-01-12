import { IOwnerRepository } from "./IOwnerRepository";

export interface IGithubOfflineService {
  save: (repositories: IOwnerRepository[]) => void;
}
