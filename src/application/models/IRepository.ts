export interface IRepository {
  owner: {
    avatar_url: string;
    login: string;
  };
  data: Array<{
    id: number;
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    updated_at: string;
  }>;
}
