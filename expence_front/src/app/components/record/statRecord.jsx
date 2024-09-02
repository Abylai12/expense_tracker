import React from "react";

const StatRecord = () => {
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
      <div className="flex items-center">
        <img src="./images/homeimage.png" alt="img" />
        <div className="">
          <h2>If a dog chews shoes whose shoes does he choose?</h2>
          <p>date</p>
        </div>
      </div>
    </div>
  );
};

export default StatRecord;
