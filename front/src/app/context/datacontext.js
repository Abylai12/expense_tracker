"use client";
import { createContext, useState } from "react";
import { apiUrl } from "../utility/utility";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [typeTrans, setTypeTrans] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [newest, setNewest] = useState(null);
  const [catDatas, setCatDatas] = useState(null);

  const getCurrentCustomerRecords = async () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    try {
      const response = await fetch(`${apiUrl}/record/stat`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        const { newestRecords } = await response.json();
        setNewest(newestRecords);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const getCustomerCategories = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${apiUrl}/category/customer`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        const { categories } = await res.json();
        setCatDatas(categories);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };
  return (
    <DataContext.Provider
      value={{
        getCurrentCustomerRecords,
        newest,
        typeTrans,
        setTypeTrans,
        searchValue,
        setSearchValue,
        catDatas,
        getCustomerCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
