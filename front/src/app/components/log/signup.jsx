"use client";

import React from "react";

import Link from "next/link";
import { useState } from "react";
import Login from "./login";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/app/utility/utility";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const [type, setType] = useState(true);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });
  // re_password: "",

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const postCustomerData = async () => {
    const { name, email, password } = form;
    if (!name || !email || !password) {
      return toast.warning("Хоосон талбар байж болохгүй");
    }
    const newCustomer = {
      name,
      email,
      password,
    };

    try {
      const res = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      });

      if (res.ok) {
        const data = await res.json();
        toast.success("Амжилттай бүртгэгдэлээ");
        router.push("/");
      } else {
        console.error("Failed to create customer:", res.statusText);
      }
    } catch (error) {
      console.error("Error occurred while creating customer:", error);
      toast.warning("Please try again");
    }
  };

  const updateCustomerData = async () => {
    try {
      const res = await fetch(`${apiUrl}/customers`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogin = () => {
    type ? postCustomerData() : updateCustomerData();
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className=" flex justify-center items-center  gap-4 flex-col">
        <img className="mb-10" src="./images/logo.png" alt="img" />
        <h1 className="text-2xl font-semibold mb-2 text-slate-900 ">
          Create Geld account
        </h1>
        <p className="font-normal text-base mb-10">
          Sign up below to create your Wallet account
        </p>
      </div>
      <Login
        handleChange={handleChange}
        form={form}
        handleLogin={handleLogin}
      />

      <div className="flex justify-center items-center">
        <span className="mr-3">Already have account?</span>
        <Link href="/" className="text-purple-600">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
