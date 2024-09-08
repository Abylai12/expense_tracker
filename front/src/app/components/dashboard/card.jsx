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
        <h2 className="card-title border-b py-4 ">Your income</h2>
        <p> {sum} ₮</p>
        <p className="">Your {transType} amount</p>
        <div className="">info from last month</div>
      </div>
    </div>
  );
};

export default Card;
