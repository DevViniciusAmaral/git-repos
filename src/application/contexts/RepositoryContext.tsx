import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";
import {
  IOwnerRepository,
  IRepositoryContext,
} from "@models/IRepositoryContext";
import { githubService } from "@infrastructure/services/github";

export const RepositoryContext = createContext({} as IRepositoryContext);

export const RepositoryProvider = ({ children }: PropsWithChildren) => {
  const [repositories, setRepositories] = useState<IOwnerRepository[]>([]);
//   console.log("Repositories =>", JSON.stringify(repositories, null, 2));

  useEffect(() => {
    setRepositories(githubService.offline.read());
  }, []);

  return (
    <RepositoryContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </RepositoryContext.Provider>
  );
};
