import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { AppContext } from "../App";
ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart(props) {
  const { dark } = useContext(AppContext);

  const data = {
    labels: ["Carbohydrate", "Protein", "Sugar", "Fat", "Fiber"],
    datasets: [
      {
        label: "Nutrients",
        data: props.data,
        backgroundColor: ["#003f5c", "#58508d", "green", "#ff6361", "#ffa600"],
      },
    ],
  };


  const legendColor = dark === 'dark' ? "white" : "black"

  const options = {    
    plugins: {
        legend: {
        display: true,
        labels: {
          color: legendColor,
          fontSize: 10,
        },
      },
      datalabels: {
        color: "white",
        display: true,
        align: "bottom",
        borderRadius: 3,
        font: {
          size: 12,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Doughnut
      data={data}
      plugins={[ChartDataLabels]}
      options={options}
      height={"3%"}
    />
  );
}

export default DonutChart;
