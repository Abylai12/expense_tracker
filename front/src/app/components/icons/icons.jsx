"use client";

import React, { useContext, useState } from "react";
import { FaHome, FaCar, FaShoppingBag } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { DataContext } from "@/app/context/datacontext";

const Icons = () => {
  const { catForm, setCatForm } = useContext(DataContext);
  const icons = [
    {
      id: 1,
      name: "Home",
      value: <FaHome />,
    },
    {
      id: 2,
      name: "Food & Drinks",
      value: <MdRestaurant />,
    },
    {
      id: 3,
      name: "Shopping",
      value: <FaShoppingBag />,
    },
    {
      id: 4,
      name: "Transportation",
      value: <FaCar />,
    },
    {
      id: 5,
      name: "Investment",
      value: <MdCurrencyExchange />,
    },
    {
      id: 6,
      name: "Plane",
      value: <FaPlaneDeparture />,
    },
    {
      id: 7,
      name: "Hospital",
      value: <FaHospitalUser />,
    },
    {
      id: 8,
      name: "Cinema",
      value: <MdLocalMovies />,
    },
  ];
  const [selected, setSelected] = useState(null);
  // const [icon, setIcon] = useState(null);

  const handleClick = (idx) => {
    setSelected(idx);
    setCatForm((preCatFrom) => ({
      ...preCatFrom,
      proImg: icons[idx].name,
    }));
  };
  console.log("first", catForm);

  return (
    <div className={`flex gap-2 text-5xl mb-4  `}>
      {icons.map(({ value }, idx) => (
        <button
          className={`hover:border hover:border-green-700 ${
            selected === idx ? " border border-red-700" : "border-red-700"
          }`}
          key={idx}
          onClick={() => handleClick(idx)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Icons;
