import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

function Table() {
  const confirmed = useSelector((state) => state.info.data.confirmed.value);
  const recovered = useSelector((state) => state.info.data.recovered.value);
  const deaths = useSelector((state) => state.info.data.deaths.value);

  const state = {
    labels: ["Confirmed", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Confirmed",
        backgroundColor: ["red", "yellow", "green"],
        borderWidth: "0",
        data: [confirmed, recovered, deaths],
      },
    ],
  };
  return (
    <div className="chart">
      <Bar data={state} />
    </div>
  );
}

export default Table;
