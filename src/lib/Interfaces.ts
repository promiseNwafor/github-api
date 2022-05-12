export interface IRepo {
  id: string;
  name: string;
  description: string;
  private: boolean;
  owner: { avatar_url: string; login: string };
  [key: string]: string | {};
}
