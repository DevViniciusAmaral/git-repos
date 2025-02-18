import { api } from "../api";
import { IService } from "./models/IService";

export const service: IService = {
  list: ({ owner }) => api.get(`/users/${owner}/repos`),
};
