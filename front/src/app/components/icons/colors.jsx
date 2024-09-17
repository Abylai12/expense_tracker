import { DataContext } from "@/app/context/datacontext";
import { catColor } from "@/app/utility/colors";
import React, { useContext, useState } from "react";

const Colors = ({ setCatForm }) => {
  const [color, setColor] = useState(null);

  const handleClick = (value, idx) => {
    setColor(idx);
    setCatForm((preForm) => ({
      ...preForm,
      color: value,
    }));
  };
  return (
    <div className="flex gap-2">
      {Object.values(catColor).map((value, idx) => (
        <div
          key={idx}
          className={`w-10 h-10 hover:border hover:border-red-700 ${
            color === idx ? " border border-red-700" : "border-red-700"
          }`}
        >
          <button
            className={`w-10 h-10 rounded-full  `}
            style={{ backgroundColor: value }}
            onClick={() => handleClick(value, idx)}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default Colors;
