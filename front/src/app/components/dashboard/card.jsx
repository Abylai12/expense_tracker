import React, { useState } from "react";

const Card = ({ sum, transType }) => {
  // const [valueInc] = total
  //   .filter((tr) => tr.transaction_type === "INC")
  //   .map((d) => ({
  //     name: new Intl.NumberFormat().format(d.sum),
  //   }));
  // const [valueExp] = total
  //   .filter((tr) => tr.transaction_type === "EXP")
  //   .map((d) => ({
  //     name: new Intl.NumberFormat().format(d.sum),
  //   }));
  // console.log("first", valueExp);

  return (
    <div className=" card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title border-b py-4 ">
          Your {transType === "income" ? "income" : "expense"}
        </h2>
        <p
          className={`font-bold text-2xl ${
            transType === "income" ? "text-green-400" : "text-red-400"
          }`}
        >
          {sum} ₮
        </p>
        <p className="">Your {transType} amount</p>
        <div className="">info from last month</div>
      </div>
    </div>
  );
};

export default Card;
