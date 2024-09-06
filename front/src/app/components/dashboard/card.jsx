import React from "react";

const Card = ({ total }) => {
  const [valueInc] = total
    .filter((tr) => tr.transaction_type === "INC")
    .map((d) => ({
      name: new Intl.NumberFormat().format(d.sum),
    }));
  const [valueExp] = total
    .filter((tr) => tr.transaction_type === "EXP")
    .map((d) => ({
      name: new Intl.NumberFormat().format(d.sum),
    }));
  console.log("first", valueExp);

  return (
    <div className="flex">
      <div className=" card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Your income</h2>
          <p> {valueInc.name}₮</p>
          <p>Your transaction_type amount</p>
          <div className="">info from last month</div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Your income</h2>
          <p>{valueExp.name}₮</p>
          <p>Your transaction_type amount</p>
          <div className="">info from last month</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
