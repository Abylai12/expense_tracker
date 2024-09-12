"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [typeTrans, setTypeTrans] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [newest, setNewest] = useState(null);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    profile_img: "",
  });

  const currentCustomerData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8008/customers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const { customer } = await response.json();
        setUser(customer);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const getCurrentCustomerRecords = async () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    try {
      const response = await fetch("http://localhost:8008/record/stat", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        const { newestRecords } = await response.json();
        console.log("new", newestRecords);
        setNewest(newestRecords);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
        currentCustomerData,
        getCurrentCustomerRecords,
        newest,
        typeTrans,
        setTypeTrans,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
