import React from "react";
import "./Chart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Chart = ({ title, data, dataKey, grid,aspect }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart data={data}>
          <XAxis dataKey="name" srtroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} srtroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid srtroke="#e0bfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
