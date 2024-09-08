import React from "react";

const LastRecord = ({ name, amount, transaction_type }) => {
  return (
    <div className="border-b py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="./images/homeimage.png" alt="img" />
          <div className="ml-4 text-base">
            <h2>{name}</h2>
            <p className="text-gray-500 text-sm">date</p>
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
    </div>
  );
};

export default LastRecord;
