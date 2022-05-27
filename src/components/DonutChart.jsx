import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart(props) {

    const data = {
    labels: ["Carbohydrate", "Protein", "Sugar", "Fat", "Fiber"],
    datasets: [{
      label: "Nutrients", 
      data: props.data,
      backgroundColor: ["#003f5c", "#58508d", "green","#ff6361", "#ffa600"]
    }]
    }
  
    const options = {
    legend: {
            display: true,
            labels: {
              fontColor: 'rgb(255, 99, 132)',
              fontSize: 10
            }
    },
    plugins: {
      datalabels: {
        color: 'white',
        display: true,
        align: 'bottom',
        borderRadius: 3,
        font: {
          size: 12,
        }
      },
      },
    maintainAspectRatio: false
  }
  
  return (
    <Doughnut data={data} plugins={[ChartDataLabels]} options={options} height={"3%"}/>
  )
}

export default DonutChart