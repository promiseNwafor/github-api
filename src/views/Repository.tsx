import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";

const Repository = () => {
  const location = useLocation();
  const { fetchData, data } = useFetch();
  let item: any;

  useEffect(() => {
    if (location) {
      item = location.state;
    }
  }, [location]);

  const handleSearch = async () => {
    await fetchData(
      `https://api.github.com/search/issues?q=repo:${item?.login}/${item?.name}`
    );
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <div className="container flex">
        <div className="row flex">
          {data?.map((dt, i) => (
            <div key={i} className="col-md-6 col-lg-4 p-3 flex">
              <div
                className={`card px-3 border border-secondary d-flex flex-column justify-content-center align-items-between`}
              >
                <div className="d-flex justify-content-between align-items-center gap-4">
                  <div className="">
                    <p className="fw-bold text-capitalize pt-1">{dt.title}</p>
                  </div>
                  <div className="w-50 text-right">
                    <p>Created at {dt.created_at}</p>
                    <p className="text-truncate mt-1 border border-info d-flex justify-content-center align-items-center rounded">
                      {dt.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Repository;
