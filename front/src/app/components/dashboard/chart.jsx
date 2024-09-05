// "use client";
// import React, { useEffect } from "react";
// import Highcharts from "highcharts";

// const Chart = () => {
//   const charts = () => {
//     Highcharts.chart("container", {
//       chart: {
//         type: "column",
//       },
//       title: {
//         text: "Income and Expenses",
//         align: "left",
//       },
//       subtitle: {
//         align: "left",
//       },
//       xAxis: {
//         categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
//         crosshair: true,
//         accessibility: {
//           description: "Countries",
//         },
//       },
//       yAxis: {
//         min: 0,
//       },
//       tooltip: {
//         valueSuffix: " (1000 MT)",
//       },
//       plotOptions: {
//         column: {
//           pointPadding: 0.2,
//           borderWidth: 0,
//         },
//       },
//       series: [
//         {
//           name: "Corn",
//           data: [387749, 280000, 129000, 64300, 54000, 34300],
//         },
//         {
//           name: "Wheat",
//           data: [45321, 140000, 10000, 140500, 19500, 113500],
//         },
//       ],
//     });
//   };

//   useEffect(() => {
//     charts();
//   }, []); // Empty dependency array ensures this runs only once after the component mounts

//   return (
//     <div id="container" style={{ width: "100%", height: "400px" }}>
//       Chart
//     </div>
//   );
// };

// export default Chart;
