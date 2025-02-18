import { AxiosPromise } from "axios";
import { IListRequest } from "./request/IListRequest";
import { IListResponse } from "./response/IListResponse";

export interface IService {
  list: (data: IListRequest) => AxiosPromise<IListResponse[]>;
}
