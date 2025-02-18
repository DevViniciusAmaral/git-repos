import { service } from "@/infrastructure/services";
import { repositoryStore } from "../stores/RepositoryStore";
import { IRepository } from "../models/IRepository";

export const useRepository = () => {
  const { repositories, setRepositories } = repositoryStore();

  const findRepository = async (owner: string) => {
    try {
      const { data } = await service.list({ owner });
      return {
        owner: data?.at(0)?.owner,
        data: data?.map((repo) => ({
          id: repo?.id,
          name: repo?.name,
          description: repo?.description,
          owner: repo?.owner,
          html_url: repo?.html_url,
          created_at: repo?.created_at,
          updated_at: repo?.updated_at,
        })),
      };
    } catch (error) {
      console.log("ERROR [findRepository]: ", error);
    }
  };

  const saveRepository = (data: IRepository) => {
    const isExists = repositories.find(
      (repository) => repository.owner.login === data.owner.login
    );

    if (!isExists) setRepositories([...repositories, data]);
    else {
      setRepositories(
        repositories.map((repository) => {
          if (repository.owner.login === data.owner.login) return data;
          else return repository;
        })
      );
    }
  };

  const deleteRepository = (owner: string) => {
    setRepositories(repositories.filter((repo) => repo.owner.login !== owner));
  };

  return { repositories, findRepository, saveRepository, deleteRepository };
};
