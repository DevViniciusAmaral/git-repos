export interface IRepository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}
