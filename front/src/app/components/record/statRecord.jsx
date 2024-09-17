import { iconsCat } from "@/app/utility/icons";
import React from "react";

const StatRecord = ({ newest, typeTrans, searchValue }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-4">
          <button>
            <img src="./images/left.png" alt="img" />
          </button>
          <span>Last 30 Days</span>
          <button>
            <img src="./images/right.png" alt="img" />
          </button>
        </div>
        <select className="select select-bordered w-full max-w-xs">
          <option>Newest</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <h1 className="font-semibold text-base mb-3">Today</h1>
      {newest
        ?.filter(
          (info) =>
            info?.name.toLowerCase().includes(searchValue.toLowerCase()) &&
            info?.transaction_type.includes(typeTrans)
        )
        .map(({ name, d, amount, transaction_type }, idx) => (
          <div
            className="bg-base-100 flex justify-between items-center mb-3 px-6 py-4 rounded-xl "
            key={idx}
          >
            <div className="flex items-center ">
              <div
                className={`w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center ${
                  transaction_type === "INC" ? "bg-blue-700" : "bg-red-700"
                }`}
              >
                <>{iconsCat.food}</>
              </div>
              <div className="ml-4 text-base">
                <h2>{name}</h2>
                <p className="text-gray-500 text-sm">{d}</p>
              </div>
            </div>
            <p
              className={`${
                transaction_type === "INC" ? "text-green-500" : "text-red-500"
              }`}
            >
              {amount}
            </p>
          </div>
        ))}
    </div>
  );
};

export default StatRecord;
