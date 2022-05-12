import { createContext, useContext, useState } from "react";
import { useFetch } from "../components/hooks/useFetch";
import { IRepo } from "../lib/Interfaces";

interface IRepoContext {
  data: IRepo[] | null;
  error: boolean;
  loading: boolean;
  [x: string]: any;
}

type Props = {
  [x: string]: any;
};

const baseURL = "https://api.github.com/search/";

const RepoContext = createContext<IRepoContext>({} as IRepoContext);

const RepoContextProvider: React.FC<Props> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, errorMsg, loading, fetchData } = useFetch();

  const handleSearch = () => {
    fetchData(`${baseURL}repositories?q=${searchQuery}`);
    setSearchQuery("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <RepoContext.Provider
      value={{
        handleSearch,
        handleInputChange,
        handleKeyPress,
        data,
        error,
        errorMsg,
        loading,
        searchQuery,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
};

export default RepoContextProvider;

export const useRepoContextContext = () =>
  useContext<IRepoContext>(RepoContext);
