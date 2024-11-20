import { iconsCat } from "@/app/utility/icons";
import React from "react";

const LastRecord = ({ name, amount, transaction_type, created_at, cname }) => {
  const formatDate = (data) => {
    const date = new Date(data);

    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hour = date.getUTCHours();

    return `${month}-${day} ${hour}:00`;
  };
  return (
    <div className="border-b py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src="./images/homeimage.png" alt="img" /> */}
          <div
            className={`w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center ${
              transaction_type === "INC" ? "bg-blue-700" : "bg-red-700"
            }`}
          >
            <div
              className={`text-white ${
                transaction_type === "INC" ? "text-white" : ""
              }`}
            >
              {iconsCat[cname || "home"]}
            </div>
          </div>
          <div className="ml-4 text-base">
            <h2>{name}</h2>
            <p className="text-gray-500 text-sm">{formatDate(created_at)}</p>
          </div>
        </div>
        <p
          className={`${
            transaction_type === "INC" ? "text-green-500" : "text-red-500"
          }`}
        >
          {new Intl.NumberFormat().format(amount)} ₮
        </p>
      </div>
    </div>
  );
};

export default LastRecord;
