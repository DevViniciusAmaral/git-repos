import { IRepository } from "./IRepository";

export interface IOwnerRepository {
  owner: { name: string; photo: string };
  repositories: IRepository[];
  isFavorite?: boolean;
}

export interface IRepositoryContext {
  repositories: IOwnerRepository[];
  setRepositories: React.Dispatch<React.SetStateAction<IOwnerRepository[]>>;
}
