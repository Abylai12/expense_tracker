"use client";

import React, { useEffect, useState } from "react";
import Card from "./card";
import CardStat from "./cardStat";
import LastRecord from "./lastRecord";
import WalletCard from "./wallet";

const Dashboard = () => {
  const [transAmount, setTransAmount] = useState([]);
  const [dataPie, setDataPie] = useState([]);
  const [total, setTotal] = useState([]);
  const [latestFive, setLatestFive] = useState([]);

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
        setLatestFive(latestFiveRecords);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    currentCustomerData();
  }, []);

  return (
    <div className=" bg-gray-100">
      <div className="max-w-[1200px] m-auto py-8">
        <div className="flex justify-between">
          <WalletCard />
          {total.map(({ sum, transaction_type }) => (
            <Card
              sum={new Intl.NumberFormat().format(sum)}
              transType={transaction_type === "INC" ? "income" : "expense"}
            />
          ))}
        </div>
        <div className="my-8">
          <CardStat transAmount={transAmount} dataPie={dataPie} />
        </div>
        <div>
          <h2>latestFiveRecords</h2>
          {latestFive.map(({ name, amount, transaction_type }) => (
            <LastRecord
              name={name}
              amount={amount}
              transaction_type={transaction_type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
