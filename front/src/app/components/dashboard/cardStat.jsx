"use client";

import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";

const CardStat = ({ transAmount, expenseCat }) => {
  const lbl = transAmount.map((tr) => `W${format(tr.w, "d")}`);
  console.log(
    "LBL",
    transAmount.filter((tr) => tr.transaction_type === "EXP")
  );
  const charts = () => {
    Highcharts.chart("container_01", {
      chart: {
        type: "column",
      },
      title: {
        text: "Income and Expenses",
        align: "left",
      },
      subtitle: {
        align: "left",
      },
      xAxis: {
        categories: lbl,
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
      },

      series: [
        {
          name: "INC",
          data: transAmount
            .filter((tr) => tr.transaction_type === "INC")
            .map((tr) => tr.sum),
        },
        {
          name: "EXP",
          data: transAmount
            .filter((tr) => tr.transaction_type === "EXP")
            .map((tr) => tr.sum),
        },
      ],
      credits: {
        enabled: false, // Disable credits
      },
    });
  };

  // console.log(
  //   expenseCat.map( ({total_amount, cat_name})=>{
  //     setName({
  //       name:cat_name,
  //       y:total_amount
  //     })
  //   } )
  // );

  console.log(
    expenseCat.map((tr, { name, y }) => {
      ({ [name]: tr.cat_name, [y]: tr.total_amount });
    })
  );

  const pieChart = () => {
    Highcharts.chart("container_02", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Egg Yolk Composition",
      },
      tooltip: {
        valueSuffix: "%",
      },
      subtitle: {
        text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: [
            {
              enabled: true,
              distance: 20,
            },
            {
              enabled: true,
              distance: -40,
              format: "{point.percentage:.1f}%",
              style: {
                fontSize: "1.2em",
                textOutline: "none",
                opacity: 0.7,
              },
              filter: {
                operator: ">",
                property: "percentage",
                value: 10,
              },
            },
          ],
        },
      },
      series: [
        {
          name: "Percentage",
          colorByPoint: true,
          data: [
            {
              cat_name: "Water",
              y: 55.02,
            },
            {
              name: "Fat",
              y: 26.71,
            },
            {
              name: "Carbohydrates",
              y: 1.09,
            },
            {
              name: "Protein",
              y: 15.5,
            },
            {
              name: "Ash",
              y: 1.68,
            },
          ],
        },
      ],
    });
  };

  useEffect(() => {
    charts();
    pieChart();
  }, [transAmount]);
  return (
    <div>
      <div id="container_01" style={{ width: "800px", height: "400px" }}></div>
      <div id="container_02" style={{ width: "800px", height: "400px" }}></div>
    </div>
  );
};

export default CardStat;
