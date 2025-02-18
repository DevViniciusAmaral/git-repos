import { service } from "@/infrastructure/services";
import { repositoryStore } from "../stores/RepositoryStore";
import { IRepository } from "../models/IRepository";

export const useRepository = () => {
  const { repositories, setRepositories } = repositoryStore();

  const findRepository = async (owner: string): Promise<IRepository[]> => {
    try {
      const { data } = await service.list({ owner });
      return data?.map((repo) => ({
        id: repo?.id,
        name: repo?.name,
        description: repo?.description,
        owner: repo?.owner,
        html_url: repo?.html_url,
        created_at: repo?.created_at,
        updated_at: repo?.updated_at,
      }));
    } catch (error) {
      console.log("ERROR [findRepository]: ", error);
    }
  };

  const saveRepository = (data: IRepository) => {
    const isExists = repositories.find((repo) => repo.id === data.id);

    if (isExists) {
      setRepositories(
        repositories.map((repo) => (repo.id === data.id ? data : repo))
      );
    } else setRepositories([...repositories, data]);
  };

  const deleteRepository = (id: number) => {
    setRepositories(repositories.filter((repo) => repo.id !== id));
  };

  return { repositories, findRepository, saveRepository, deleteRepository };
};
