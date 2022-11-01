import React from "react";
import "./Home.css";
import Features from "./../../components/features/Features";
import Chart from "./../../components/chart/Chart";
import { data } from "../../data";
import WidgetSm from "./../../components/widgetSm/WidgetSm";
import WidgetLg from "./../../components/widjetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <div className="homeChart">
        <Chart grid title="فروش سالانه" data={data} dataKey="sale" aspect="6" />
      </div>
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
