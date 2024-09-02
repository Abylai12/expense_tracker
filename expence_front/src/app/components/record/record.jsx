import React from "react";
import ActionRecord from "./control/actionRecord";
import StatRecord from "./statRecord";

const Record = () => {
  return (
    <div className="flex gap-8 justify-center max-w-[1200px] m-auto">
      <ActionRecord />
      <StatRecord />
    </div>
  );
};

export default Record;
