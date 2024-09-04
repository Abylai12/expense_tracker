"use client";

import React, { useEffect } from "react";
import Card from "./card";
import CardStat from "./cardStat";
import LastRecord from "./lastRecord";

const Dashboard = () => {
  const currentCustomerData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8008/customers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const { customer } = await response.json();
        console.log("USER", customer);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  // useEffect(() => {
  //   currentCustomerData();
  // }, []);

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
