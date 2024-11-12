"use client";
import { RecordContext } from "@/app/context/addRecord-context";
import { DataContext } from "@/app/context/datacontext";
import { useContext, useEffect, useState } from "react";

const Modal = ({ showModal, closeModal, openModal }) => {
  const { recordForm, postRecordData } = useContext(RecordContext);

  const submitValue = () => {
    postRecordData();
    closeModal();
  };
  return (
    <div className="">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full"
        onClick={() => {
          showModal();
        }}
      >
        +Record
      </button>

      {openModal && (
        <dialog open className="modal modal-middle">
          <div className="modal-box max-w-[800px] ">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Add Record</h3>
              <button className="btn-square" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex">
              <RightInput />
              <LeftInput />
            </div>
            <div className="modal-action justify-center">
              <button
                className={`font-normal text-base py-2 px-14 rounded-[20px] ${
                  recordForm.transaction_type === "EXP"
                    ? "bg-blue-700 text-white "
                    : "bg-green-700 text-white "
                }`}
                onClick={submitValue}
              >
                Add Record
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
export default Modal;

export const RightInput = () => {
  const { catDatas } = useContext(DataContext);
  const { setRecordForm, recordForm } = useContext(RecordContext);

  const handleSelected = (e) => {
    setRecordForm((preRecordForm) => ({
      ...preRecordForm,
      category_id: e.target.value,
    }));
  };

  const handleExpense = (value) => {
    setRecordForm((preRecordForm) => ({
      ...preRecordForm,
      transaction_type: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecordForm((prevRecordForm) => ({
      ...prevRecordForm,
      [name]: value,
    }));
  };
  // const handleDate = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "date") {
  //     setDateTime((preForm) => ({
  //       ...preForm,
  //       [name]: value,
  //     }));
  //   } else {
  //     setDateTime((preForm) => ({
  //       ...preForm,
  //       [name]: value,
  //     }));
  //   }
  //   console.log(dateTime);
  //   const { date, time } = dateTime;
  //   const result = date + "T" + time;
  //   if (result !== "T")

  // };
  // const handleTime = (e) => {
  //   const { name, value } = e.target;
  //   setRecordForm((prevRecordForm) => ({
  //     ...prevRecordForm,
  //     [name]: value,
  //   }));
  //   console.log("time", e.target.value);
  // };
  // console.log("type", recordForm);
  return (
    <div>
      <div className=" flex justify-between bg-base-200 rounded-full">
        <button
          className={`font-normal   text-base py-2 px-14 rounded-[20px] ${
            recordForm.transaction_type === "EXP"
              ? "bg-blue-700 text-white "
              : ""
          }`}
          onClick={() => handleExpense("EXP")}
        >
          Expense
        </button>
        <button
          className={`font-normal  text-base py-2 px-14 rounded-[20px] ${
            recordForm.transaction_type === "INC"
              ? "bg-green-700 text-white "
              : ""
          }`}
          onClick={() => handleExpense("INC")}
        >
          Income
        </button>
      </div>
      <div className="py-4 flex flex-col gap-[22px]">
        <label className="py-3 px-4 rounded-lg bg-base-200 border-base-300 flex flex-col ">
          Amount
          <input
            type="text"
            className="grow bg-base-200 "
            placeholder="₮ 000.00"
            name="amount"
            value={recordForm.amount}
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col">
          Category
          <select
            className="mt-2 select  bg-base-200"
            onChange={handleSelected}
          >
            <option disabled>Choose</option>
            {catDatas?.map(({ name, id }, idx) => (
              <option value={id} key={idx}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <div className="flex gap-3">
          <label className="flex-1">
            Date
            <input
              type="date"
              placeholder="Type here"
              className=" mt-2 input input-bordered w-full max-w-xs"
              name="date"
              value={recordForm.date}
              onChange={(e) =>
                setRecordForm((preForm) => ({
                  ...preForm,
                  date: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex-1">
            Time
            <input
              type="time"
              placeholder="Type here"
              className="mt-2 input input-bordered w-full max-w-xs"
              name="time"
              value={recordForm.time}
              onChange={(e) =>
                setRecordForm((preForm) => ({
                  ...preForm,
                  time: e.target.value,
                }))
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export const LeftInput = () => {
  const { setRecordForm } = useContext(RecordContext);
  return (
    <div className="flex flex-col p-4">
      <label>Description</label>
      <textarea
        className="textarea textarea-bordered bg-base-200 w-[360px] h-[280px]"
        placeholder="Write here"
        onChange={(e) => {
          setRecordForm((preRecordForm) => ({
            ...preRecordForm,
            name: e.target.value,
          }));
        }}
      ></textarea>
    </div>
  );
};
