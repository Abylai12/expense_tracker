"use client";

import React, { useEffect, useState } from "react";
import Card from "./card";
import CardStat from "./cardStat";
import LastRecord from "./lastRecord";
import WalletCard from "./wallet";
import { apiUrl } from "@/app/utility/utility";

const Dashboard = () => {
  const [transAmount, setTransAmount] = useState([]);
  const [dataPie, setDataPie] = useState([]);
  const [total, setTotal] = useState([]);
  const [latestFive, setLatestFive] = useState([]);

  const currentCustomerData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${apiUrl}/stat/data`, {
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
          <WalletCard total={total} />
          {total.map(({ sum, transaction_type }, idx) => (
            <Card
              key={idx}
              sum={new Intl.NumberFormat().format(sum)}
              transType={transaction_type === "INC" ? "income" : "expense"}
            />
          ))}
        </div>
        <div className="my-8">
          <CardStat transAmount={transAmount} dataPie={dataPie} />
        </div>
        <div>
          <h2 className="text-bold text-2xl p-4">Latest Five Records</h2>
          {latestFive.map(
            ({ name, amount, transaction_type, created_at }, idx) => (
              <LastRecord
                key={idx}
                created_at={created_at}
                name={name}
                amount={amount}
                transaction_type={transaction_type}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
