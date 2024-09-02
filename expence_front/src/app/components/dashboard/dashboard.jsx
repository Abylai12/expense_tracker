import React from "react";
import Card from "./card";
import CardStat from "./cardStat";
import LastRecord from "./lastRecord";

const Dashboard = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="flex">
        <Card />
        <Card />
      </div>
      <div className="flex">
        <CardStat />
        <CardStat />
      </div>
      <LastRecord />
    </div>
  );
};

export default Dashboard;
