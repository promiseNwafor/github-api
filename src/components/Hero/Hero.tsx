import { useRepoContextContext } from "../../context/RepoContextProvider";
import Button from "../common/Button";
import Input from "../common/Input";

const Hero = () => {
  const { searchQuery, handleSearch, handleInputChange, handleKeyPress } =
    useRepoContextContext();

  return (
    <div className="row py-5 border-bottom border-4 border-info">
      <div className="col text-center d-flex flex-column gap-4 justify-content-center align-items-center">
        <h3>GitHub Community</h3>
        <p>Search any Github repository by inputting its name</p>
        <Input
          id="repo-search"
          type="search"
          placeholder="Enter repository name"
          className="w-75 rounded-pill"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSearch} className="btn-dark">
          Search Repo
        </Button>
      </div>
    </div>
  );
};

export default Hero;
