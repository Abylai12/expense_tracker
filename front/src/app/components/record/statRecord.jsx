import React from "react";

const StatRecord = ({ name, transType, amount, d }) => {
  return (
    <div>
      <div>
        <div>
          <button>
            <img
              src="./images/left.png
          "
              alt="img"
            />
          </button>
          <span>Last 30 Days</span>
          <button>
            <img
              src="./images/right.png
          "
              alt="img"
            />
          </button>
        </div>
        <select className="select select-bordered w-full max-w-xs">
          <option>Newest</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <h1>Today</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="./images/homeimage.png" alt="img" />
          <div className="ml-4 text-base">
            <h2>{name}</h2>
            <p className="text-gray-500 text-sm">{d}</p>
          </div>
        </div>
        <p
          className={`${
            transType === "INC" ? "text-green-500" : "text-red-500"
          }`}
        >
          {amount}
        </p>
      </div>
    </div>
  );
};

export default StatRecord;
