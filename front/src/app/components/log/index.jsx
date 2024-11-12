"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Login from "./login";
import { useRouter } from "next/navigation";
import Loader from "../loader/loader";
import { toast } from "react-toastify";
import { apiUrl } from "@/app/utility/utility";

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
    localStorage.removeItem("token");
  };
  const postCustomerData = async () => {
    const { email, password } = form;
    if (!email || !password) {
      return toast.warning("Аль нэг талбар хоосон байна");
    }
    const user = {
      email,
      password,
    };

    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status === 404) {
        toast.error("Бүртгэлгүй хэрэглэгч байна, бүртгүүлнэ үү", {
          autoClose: 500,
        });
      }
      if (res.status === 200) {
        const { token } = await res.json();
        toast.success("Амжилттай нэвтэрлээ", { autoClose: 500 });
        localStorage.setItem("token", token);
        setIsLoading(false);
        router.push("/dashboard");
      } else {
        toast.error("Дахин оролдно уу");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(" Please try again.", { autoClose: 500 });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
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
