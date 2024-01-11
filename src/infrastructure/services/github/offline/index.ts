import { database } from "@infrastructure/database";
import { ISaveRequest } from "./models/request/ISaveRequest";
import { IOwnerRepository } from "./models/IOwnerRepository";
import { IGithubOfflineService } from "./models/IGithubOfflineService";

const saveRepositories = (value: ISaveRequest) => {
  const {
    owner: { name: owner },
  } = value;

  const data = readRepositories();
  const find = data.find(({ owner: { name } }) => name === owner);

  const repositoryList = find
    ? data.map((item) => (item.owner.name === owner ? value : item))
    : [...data, value];

  database.set("repositories", JSON.stringify(repositoryList));
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
