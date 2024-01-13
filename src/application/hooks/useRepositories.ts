import { useContext } from "react";
import Toast from "react-native-toast-message";
import { IRepository } from "@models/IRepository";
import { githubService } from "@infrastructure/services/github";
import { RepositoryContext } from "../contexts/RepositoryContext";

export const useRepositories = () => {
  const { repositories, setRepositories } = useContext(RepositoryContext);

  const saveRepository = (values: IRepository[]) => {
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

  const handleFavoriteRepository = (owner: string) => {
    const repositoryList = repositories.map((repo) => ({
      ...repo,
      isFavorite:
        repo.owner.name === owner ? !repo.isFavorite : repo.isFavorite,
    }));

    setRepositories(repositoryList);
    githubService.offline.save(repositoryList);
  };

  const getRepository = async (owner: string) => {
    try {
      const { data } = await githubService.online.getOwnerRepositories({
        owner,
      });

      return data;
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Atenção",
        text2: `Nenhum repositório não encontrado para ${owner}!`,
      });
    }
  };

  return {
    repositories,
    saveRepository,
    getRepository,
    deleteRepository,
    handleFavoriteRepository,
  };
};
