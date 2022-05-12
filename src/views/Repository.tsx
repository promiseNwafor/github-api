import Button from "../components/common/Button";
import Input from "../components/common/Input";

const Repository = () => {
  return (
    <div className="row py-5 border-bottom border-4 border-info">
      <div className="col text-center d-flex flex-column gap-4 justify-content-center align-items-center">
        <h3>GitHub Repository</h3>
        <p>Search issues here</p>
        <Input
          id="repo-search"
          type="search"
          placeholder="Enter issue"
          className="w-75 rounded-pill"
        />
        <Button className="btn-dark">Search issue</Button>
      </div>
    </div>
  );
};

export default Repository;
