import React from "react";
import "./App.css";
import Sidbar from "./components/sidbar/Sidbar";
import TopBar from "./components/topBar/TopBar";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  let router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidbar />
        {router}
      </div>
    </>
  );
};

export default App;
