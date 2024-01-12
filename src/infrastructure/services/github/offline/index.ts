import { database } from "@infrastructure/database";
import { IOwnerRepository } from "./models/IOwnerRepository";
import { IGithubOfflineService } from "./models/IGithubOfflineService";

const saveRepositories = (repositories: IOwnerRepository[]) => {
  database.set("repositories", JSON.stringify(repositories));
};

const readRepositories = (): IOwnerRepository[] => {
  return JSON.parse(database.getString("repositories") ?? "[]");
};

const deleteOwnerRepository = (owner: string) => {
  const data = readRepositories().filter((item) => item.owner.name === owner);
  database.set("repositories", JSON.stringify(data));
};

export const githubOfflineService: IGithubOfflineService = {
  save: saveRepositories,
  read: readRepositories,
  delete: deleteOwnerRepository,
};
