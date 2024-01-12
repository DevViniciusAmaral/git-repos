import { IRepository } from "./IRepository";

export interface IOwnerRepository {
  owner: { name: string; photo: string };
  repositories: IRepository[];
}

export interface IRepositoryContext {
  repositories: IOwnerRepository[];
  setRepositories: React.Dispatch<React.SetStateAction<IOwnerRepository[]>>;
}
