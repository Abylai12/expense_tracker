"use client";

import { createContext, useState } from "react";
import { apiUrl } from "../utility/utility";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [openModal, setModalOpen] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    profile_img: "",
  });

  const currentCustomerData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${apiUrl}/customers`, {
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
    <UserContext.Provider
      value={{
        setUser,
        user,
        currentCustomerData,
        openModal,
        setModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
