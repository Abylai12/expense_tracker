"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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

  return (
    <UserContext.Provider value={{ setUser, user, currentCustomerData }}>
      {children}
    </UserContext.Provider>
  );
};