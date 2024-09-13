import { DataContext } from "@/app/context/datacontext";
import React, { useContext } from "react";

const TransType = () => {
  const { setTypeTrans } = useContext(DataContext);
  return (
    <div className="">
      <h1 className="font-semibold text-base my-6">Types</h1>
      <div className="flex flex-col gap-2 mt-2 ml-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="radio-1"
            className="radio"
            defaultChecked
            onChange={() => {
              setTypeTrans("");
            }}
          />
          <span>All</span>
        </div>
        <div className="flex items-center gap-2 ">
          <input
            type="radio"
            name="radio-1"
            className="radio"
            onChange={() => {
              setTypeTrans("INC");
            }}
          />
          <span>Income</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="radio-1"
            className="radio"
            onChange={() => {
              setTypeTrans("EXP");
            }}
          />
          <span>Expence</span>
        </div>
      </div>
    </div>
  );
};

export default TransType;
