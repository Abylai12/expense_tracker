"use client";

import { UserContext } from "@/app/context/mycontext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../modal/modal";

const Header = () => {
  const router = useRouter();
  const { user, currentCustomerData, openModal, setModalOpen } =
    useContext(UserContext);
  const { name } = user;

  const [form, setForm] = useState({
    name: "",
    amount: "",
    imgUrl: "",
    jobTitle: "",
  });

  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
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
        <Modal
          openModal={openModal}
          showModal={showModal}
          closeModal={closeModal}
          form={form}
          handleChange={handleChange}
        />

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
