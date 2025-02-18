export interface IRepositoryData {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
}

export interface IRepository {
  owner: {
    avatar_url: string;
    login: string;
  };
  data: IRepositoryData[];
  isFavorite: boolean;
}
