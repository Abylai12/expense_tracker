"use client";
import React, { useState } from "react";

import Link from "next/link";
import Login from "./login";

const LoggingPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log("handle", form);
  };
  const handleLogin = () => {
    postCustomerData();
  };
  const postCustomerData = async () => {
    const { email, password } = form;
    if (!email || !password) {
      return console.log("password aldaa"); // Stop the function if any field is empty
    }
    const user = {
      email,
      password,
    };

    try {
      const res = await fetch("http://localhost:8008/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Customer created successfully:", data);
      } else {
        console.error("Failed to create customer:", res.statusText);
      }
    } catch (error) {
      console.error("Error occurred while creating customer:", error);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className=" flex justify-center items-center  gap-4 flex-col">
        <img className="mb-10" src="./images/logo.png" alt="img" />
        <h1 className="text-2xl font-semibold mb-2 text-slate-900 ">
          Welcome Back
        </h1>
        <p className="font-normal text-base mb-10">
          Welcome back, Please enter your details
        </p>
      </div>
      <Login
        magic="hidden"
        handleChange={handleChange}
        form={form}
        handleLogin={handleLogin}
      />

      <div className="flex justify-center items-center">
        <span className="mr-3">Don't have account?</span>
        <Link href="/sign" className="text-purple-600">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoggingPage;
