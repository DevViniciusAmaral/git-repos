import { useContext } from "react";
import { IRepository } from "@models/IRepository";
import { githubService } from "@infrastructure/services/github";
import { RepositoryContext } from "../contexts/RepositoryContext";

export const useRepositories = () => {
  const { repositories, setRepositories } = useContext(RepositoryContext);

  const save = (values: IRepository[]) => {
    const { login: name, avatar_url: photo } = values[0].owner;

    const repository = { owner: { name, photo }, repositories: values };
    const find = repositories.find(({ owner }) => owner.name === name);

    const repositoryList = find
      ? repositories.map((item) =>
          item.owner.name === name ? repository : item
        )
      : [...repositories, repository];

    setRepositories(repositoryList);
  };

  const deleteRepository = (owner: string) => {
    const repositoryList = repositories.filter(
      (value) => value.owner.name !== owner
    );

    setRepositories(repositoryList);
    githubService.offline.save(repositoryList);
  };

  const handleFavoriteRepository = (owner: string, repositoryId: number) => {
    const data = repositories.find((repo) => repo.owner.name === owner);

    const repositoryList = data.repositories.map((value) => {
      const isSame = value.id === repositoryId;
      const isFavorite = isSame ? !value.isFavorite : value.isFavorite;
      return isSame ? { ...value, isFavorite } : value;
    });

    const repository = { ...data, repositories: repositoryList };
    const newRepositories = repositories.map((value) =>
      value.owner.name === owner ? repository : value
    );

    setRepositories(newRepositories);
    githubService.offline.save(newRepositories);
  };

  return {
    repositories,
    save,
    delete: deleteRepository,
    handleFavoriteRepository,
  };
};