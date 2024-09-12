"use client";
import React, { useState, useEffect, useContext } from "react";
import ActionRecord from "./control/actionRecord";
import StatRecord from "./statRecord";
import { UserContext } from "@/app/context/mycontext";

const Record = () => {
  const { newest, getCurrentCustomerRecords, typeTrans, searchValue } =
    useContext(UserContext);

  useEffect(() => {
    getCurrentCustomerRecords();
  }, []);
  return (
    <div className="bg-gray-100 pt-8 pb-[132px]">
      <div className="flex gap-8 max-w-[1200px] m-auto ">
        <ActionRecord />
        <StatRecord
          newest={newest}
          typeTrans={typeTrans}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};

export default Record;
