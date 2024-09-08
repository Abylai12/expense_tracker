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
import { NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER } from "next/dist/lib/constants";

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

  const catNames = dataPie.map((info) => info.cat_name);

  const labels = barLabels;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: incLabels,
        backgroundColor: [" rgba(132, 204, 22, 1)"],
        borderColor: [" rgba(132, 204, 22, 1)"],
        borderWidth: 1,
      },
      {
        label: "My First Dataset",
        data: expLabels,
        backgroundColor: [" rgba(249, 115, 22, 1)"],
        borderColor: [" rgba(249, 115, 22, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 5,
      },
      margin: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { dash: [6, 6], display: true },
        grid: {
          display: true, // Display grid lines for the y-axis
        },
        ticks: {
          padding: 15,
        },
      },
      x: {
        beginAtZero: true,
        border: { display: true },
        grid: {
          display: false, // Display grid lines for the y-axis
        },
        ticks: {
          padding: 7,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 40,
        borderWidth: 0.7,
      },
    },
  };
  const datas = {
    labels: catNames,
    datasets: [
      {
        label: "My First Dataset",
        data: datasPie,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(153, 102, 255)",
          "rgb(190, 02, 55)",
        ],
        hoverOffset: 2,
      },
    ],
  };

  return (
    <div className="flex justify-between">
      <div className="card bg-base-100  w-[588px] h-[284px]">
        <h1 className="border-b py-4 px-6 text-base font-semibold">
          Income and Expense
        </h1>
        <div className="w-[588px] h-[226px]">
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="card bg-base-100  w-[588px] h-[284px]">
        <h1 className="border-b py-4 px-6 text-base font-semibold">
          Income and Expense
        </h1>
        <div className="w-[156px] h-[156px] flex ">
          <Doughnut data={datas} />
          <div className="w-[156px] h-[156px]">
            {dataPie.map(({ cat_name, total_amount, weekly_percentage }) => (
              <div className="flex justify-between w-full">
                <p className="flex-1">{cat_name}</p>
                <p className="flex-1  ">{total_amount}</p>
                <p className="flex-1">{weekly_percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStat;
