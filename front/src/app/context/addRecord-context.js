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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recordForm),
      });
      if (!res.ok) {
        console.log("error", res.status);
      }

      // Parse the JSON response
      const data = await res.json();
      console.log("Response data:", data);
    } catch (error) {
      console.log("error", error);
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
