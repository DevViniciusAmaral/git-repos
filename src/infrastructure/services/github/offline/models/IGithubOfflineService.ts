import { IOwnerRepository } from "./IOwnerRepository";

export interface IGithubOfflineService {
  save: (value: IOwnerRepository) => void;
  read: () => IOwnerRepository[];
  delete: (owner: string) => void;
}
