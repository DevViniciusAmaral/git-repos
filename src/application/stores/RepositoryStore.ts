import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { stateStorage } from "./StateStorage";
import { IRepository } from "../models/IRepository";

interface IRepositoryStore {
  repositories: IRepository[];
  setRepositories: (data: IRepository[]) => void;
}

export const repositoryStore = create<IRepositoryStore>()(
  persist(
    (set, get) => ({
      repositories: get()?.repositories ?? [],
      setRepositories: (repositories) => set({ ...get(), repositories }),
    }),
    {
      name: "repository-storage",
      storage: createJSONStorage(() => stateStorage),
    }
  )
);
