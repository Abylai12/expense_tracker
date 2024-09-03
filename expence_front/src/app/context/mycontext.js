"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    name: "",
    email: "",
  });

  const currentUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8008/auth/signup", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data);
        console.log("USER", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, currentUserData }}>
      {children}
    </UserContext.Provider>
  );
};
