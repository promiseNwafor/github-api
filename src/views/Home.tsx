import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import { useRepoContextContext } from "../context/RepoContextProvider";

const Home = () => {
  const { data, error, errorMsg, loading } = useRepoContextContext();

  const cards = error ? (
    <Error errorMsg={errorMsg} />
  ) : loading ? (
    <Loader />
  ) : (
    data?.map((item) => <Card key={item.id} item={item} />)
  );

  return (
    <div className="container">
      <Hero />
      <div className="row d-flex justify-content-center py-5">
        {cards || <h2 className="text-center">No search yet</h2>}
      </div>
      {/* <PieChart /> */}
    </div>
  );
};

export default Home;
