"use client";
import React, { useState } from "react";

import Link from "next/link";
import Login from "./login";
import { useRouter } from "next/navigation";
import Loader from "../loader/loader";

const LoggingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
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
      setIsLoading(true);
      const res = await fetch("http://localhost:8008/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Customer sign in  successfully:", data);
        setIsLoading(false);
        router.push("/dashboard");
      } else {
        console.error("Failed customer:", res.statusText);
      }
    } catch (error) {
      setIsLoading(false);
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
      {isLoading ? (
        <Loader />
      ) : (
        <Login
          magic="hidden"
          handleChange={handleChange}
          form={form}
          handleLogin={handleLogin}
        />
      )}

      <div className="flex justify-center items-center">
        <span className="mr-3">Don't have account?</span>
        <Link href="/signup" className="text-purple-600">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoggingPage;
