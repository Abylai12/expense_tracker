"use client";

import { createContext, useState } from "react";
import { apiUrl } from "../utility/utility";

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [recordFrom, setRecordForm] = useState({
    customer_id: "",
    name: "",
    amount: "",
    transaction_type: "",
    description: "",
    category_id: "",
  });

  return (
    <RecordContext.Provider
      value={{
        setRecordForm,
        recordFrom,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};
