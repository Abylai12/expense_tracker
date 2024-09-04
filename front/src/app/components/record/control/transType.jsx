import React from "react";

const TransType = () => {
  return (
    <div className="my-6">
      <h1>Types</h1>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <input type="radio" name="radio-1" className="radio" defaultChecked />
          <span>All</span>
        </div>
        <div className="flex items-center gap-2 ">
          <input type="radio" name="radio-1" className="radio" />
          <span>Income</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="radio-1" className="radio" />
          <span>Expence</span>
        </div>
      </div>
    </div>
  );
};

export default TransType;
