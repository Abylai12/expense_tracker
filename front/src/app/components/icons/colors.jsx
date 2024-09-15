import { DataContext } from "@/app/context/datacontext";
import React, { useContext, useState } from "react";

const Colors = () => {
  const { catForm, setCatForm } = useContext(DataContext);
  const [color, setColor] = useState(null);
  const colors = [
    {
      name: "green",
      value: "#065535",
    },
    {
      name: "blue",
      value: "#0000ff",
    },
    {
      name: "red",
      value: "#ff0000",
    },
    {
      name: "yellow",
      value: "#ffd700",
    },
    {
      name: "orange",
      value: "#ffa500",
    },
    {
      key: "lavender",
      value: "#ccccff",
    },
    {
      name: "grey",
      value: "#dddddd",
    },
    {
      name: "purple",
      value: "#800080",
    },
  ];

  const handleClick = (idx) => {
    setColor(idx);
    setCatForm((preCatFrom) => ({
      ...preCatFrom,
      color: colors[idx].value,
    }));
  };
  return (
    <div className="flex gap-2">
      {colors.map(({ value }, idx) => (
        <div
          key={idx}
          className={`w-10 h-10 hover:border hover:border-red-700 ${
            color === idx ? " border border-red-700" : "border-red-700"
          }`}
        >
          <button
            className={`w-10 h-10 rounded-full  `}
            style={{ backgroundColor: value }}
            onClick={() => handleClick(idx)}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default Colors;
