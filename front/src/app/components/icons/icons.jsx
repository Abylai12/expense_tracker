"use client";

import React, { useState } from "react";
import { iconsCat } from "@/app/utility/icons";

const Icons = ({ setCatForm }) => {
  const [select, setSelect] = useState(null);

  const handleClick = (value, idx) => {
    setCatForm((preForm) => ({
      ...preForm,
      iconName: value,
    }));
    setSelect(idx);
  };

  return (
    <section>
      <div className={`flex gap-2 text-5xl mb-4  `}>
        {Object.keys(iconsCat).map((value, idx) => (
          <button
            className={`hover:border hover:border-green-700 ${
              select === idx ? " border border-red-700" : "border-red-700"
            }
         `}
            key={idx}
            onClick={() => {
              handleClick(value, idx);
            }}
          >
            {iconsCat[value]}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Icons;
