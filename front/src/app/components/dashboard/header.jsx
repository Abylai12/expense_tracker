"use client";

import { UserContext } from "@/app/context/mycontext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const { user, currentCustomerData } = useContext(UserContext);
  const { name } = user;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      currentCustomerData();
    }
  }, []);

  return (
    <div className="px-[120px] py-4 flex justify-between">
      <div className="flex items-center gap-6">
        <img src="./images/singlelogo.png" alt="img" className="w-10 h-10" />
        <Link
          href="/dashboard"
          className="font-semibold text-base text-slate-900"
        >
          Dashboard
        </Link>
        <Link href="/record" className="font-normal text-base text-slate-900">
          Records
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
          + Record
        </button>

        <h1>{name}</h1>
        <div className="avatar w-10 h-10">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img
              src={
                user?.profile_img ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
