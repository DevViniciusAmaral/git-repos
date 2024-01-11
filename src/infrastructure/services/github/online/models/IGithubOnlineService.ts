import { AxiosResponse } from "axios";
import { IRepository } from "@models/IRepository";
import { IGetRepositoryRequest } from "./request/IGetRepositoryRequest";

export interface IGithubOnlineService {
  getOwnerRepositories: (
    value: IGetRepositoryRequest
  ) => Promise<AxiosResponse<IRepository[]>>;
}
