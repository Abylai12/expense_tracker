"use client";

import React, { useEffect, useState } from "react";
import Card from "./card";
import CardStat from "./cardStat";
import LastRecord from "./lastRecord";

const Dashboard = () => {
  const [transAmount, setTransAmount] = useState([]);
  const [dataPie, setDataPie] = useState([]);
  const [total, setTotal] = useState([]);
  const currentCustomerData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8008/stat/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const {
          totalTransType,
          dayTrans,
          weekCategoryTrans,
          latestFiveRecords,
        } = await response.json();
        setTransAmount(dayTrans);
        setDataPie(weekCategoryTrans);
        setTotal(totalTransType);

        console.log(
          "USER",
          totalTransType,
          dayTrans,
          weekCategoryTrans,
          latestFiveRecords
        );
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    currentCustomerData();
  }, []);

  return (
    <div className="max-w-[1200px] m-auto bg-gray-100">
      <div className="flex">
        <Card total={total} />
      </div>
      <div className="my-8">
        <CardStat transAmount={transAmount} dataPie={dataPie} />
      </div>
      <LastRecord />
    </div>
  );
};

export default Dashboard;
