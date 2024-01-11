import { IRepository } from "@models/IRepository";

export interface IOwnerRepository {
  owner: { name: string; photo: string };
  repositories: IRepository[];
}
