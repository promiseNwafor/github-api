export interface IRepo {
  id: string;
  name: string;
  description: string;
  title: string;
  state: string;
  created_at: string;
  private: boolean;
  owner: { avatar_url: string; login: string };
  [key: string]: string | {};
}
