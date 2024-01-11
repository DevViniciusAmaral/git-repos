import { IRepository } from "@models/IRepository";

export interface ISaveRequest {
  owner: { name: string; photo: string };
  repositories: IRepository[];
}
