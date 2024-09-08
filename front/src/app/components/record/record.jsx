"use client";
import React, { useState, useEffect } from "react";
import ActionRecord from "./control/actionRecord";
import StatRecord from "./statRecord";

const Record = () => {
  const [newest, setNewest] = useState(null);
  const getCustomerRecords = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8008/record/stat", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        const { newestRecords } = await response.json();
        console.log("new", newestRecords);
        setNewest(newestRecords);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getCustomerRecords();
  }, []);
  return (
    <div className="flex gap-8 justify-center max-w-[1200px] m-auto">
      <ActionRecord />
      {newest?.map(({ name, transaction_type, amount, d }, idx) => (
        <StatRecord
          key={idx}
          name={name}
          transType={transaction_type}
          amount={amount}
          d={d}
        />
      ))}
    </div>
  );
};

export default Record;
