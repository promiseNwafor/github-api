import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./views/Layout";
import Repository from "./views/Repository";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Repository />} />
      </Route>
    </Routes>
  );
};

export default App;
