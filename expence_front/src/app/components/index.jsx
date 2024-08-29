import React from "react";
import Login from "./login";
import Link from "next/link";

const LoggingPage = () => {
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
      <Login magic="hidden" />
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
