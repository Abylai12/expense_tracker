"use client";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  LinearScale,
  BarElement,
  CategoryScale,
  ArcElement,
} from "chart.js";

// Registering the necessary components
ChartJS.register(Tooltip, LinearScale, BarElement, ArcElement, CategoryScale);

const CardStat = ({ transAmount, dataPie }) => {
  // Data for the chart
  const barLabels = transAmount?.reduce((pre, data) => {
    if (!pre.includes(`day-${data.w}`)) {
      pre.push(`day-${data.w}`);
    }
    return pre;
  }, []);

  const incLabels = transAmount
    .filter((data) => data.transaction_type === "INC")
    .map((tr) => tr.sum);

  const expLabels = transAmount
    .filter((data) => data.transaction_type === "EXP")
    .map((tr) => tr.sum);

  const datasPie = dataPie.map((info) => info.weekly_percentage);

  console.log("barLabels", datasPie);
  const labels = barLabels;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: incLabels,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
      {
        label: "My First Dataset",
        data: expLabels,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const datas = {
    labels: ["Red", "Blue", "Yellow", "Orange"],
    datasets: [
      {
        label: "My First Dataset",
        data: datasPie,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(153, 102, 255)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex">
      <div className="max-w-[588px] max-h-[284px]">
        <Bar data={data} options={options} />
      </div>
      <div className="max-w-[588px] max-h-[284px]">
        <h1>haha</h1>
        <Doughnut data={datas} />
      </div>
    </div>
  );
};

export default CardStat;
