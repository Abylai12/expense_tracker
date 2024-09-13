"use client";
import React, { useEffect, useContext } from "react";
import ActionRecord from "./control/actionRecord";
import StatRecord from "./statRecord";
import { DataContext } from "@/app/context/datacontext";

const Record = () => {
  const {
    newest,
    getCurrentCustomerRecords,
    getCustomerCategories,
    typeTrans,
    searchValue,
  } = useContext(DataContext);

  useEffect(() => {
    getCurrentCustomerRecords();
    getCustomerCategories();
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
