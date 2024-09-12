import React from "react";
import AddCArd from "./addCard";
import TransType from "./transType";
import AddCategory from "./addCategory";

const ActionRecord = () => {
  return (
    <div className="px-4 py-6 bg-base-100 rounded-xl border-base-200">
      <AddCArd />
      <TransType />
      <AddCategory />
    </div>
  );
};

export default ActionRecord;
