import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Your income</h2>
          <p>amount</p>
          <p>Your transaction_type amount</p>
          <div className="">info from last month</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
