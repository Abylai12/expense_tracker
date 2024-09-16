"use client";

import { createContext, useState } from "react";
import { apiUrl } from "../utility/utility";

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [recordForm, setRecordForm] = useState({
    name: "",
    amount: "",
    transaction_type: "",
    category_id: "",
    date: "",
    time: "",
  });
  // dates +"T" + time => 2024-09-12T12:30
  const postRecordData = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${apiUrl}/record/stat`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recordForm),
      });
    } catch (error) {
      toast.error("Failed to sign in. Please try again.", { autoClose: 500 });
    }
  };
  return (
    <RecordContext.Provider
      value={{
        setRecordForm,
        recordForm,
        postRecordData,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};
