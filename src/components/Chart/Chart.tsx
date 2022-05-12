import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  });

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Cryptocurrency prices",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className="chart">
      <Doughnut data={chartData} />
    </div>
  );
};

export default PieChart;
