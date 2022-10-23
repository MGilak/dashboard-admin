import React from "react";
import "./Home.css";
import Features from "./../../components/features/Features";
import Chart from "./../../components/chart/Chart";
import data from "../../data";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="فروش سالانه" data={data} dataKey="sale"/>
    </div>
  );
};

export default Home;
