"use client";

import { DataContext } from "@/app/context/datacontext";
import { useContext, useState } from "react";
import Icons from "../icons/icons";
import Colors from "../icons/colors";
import { apiUrl } from "@/app/utility/utility";
import { MdLocalMovies } from "react-icons/md";
import { toast } from "react-toastify";

const CatModal = () => {
  const { catModal, setCatModal, refresh, setRefresh } =
    useContext(DataContext);
  const [openIcons, setOpenIcons] = useState(false);
  const [catForm, setCatForm] = useState({
    catName: "",
    iconName: "",
    color: "",
  });

  const handleClick = () => {
    setOpenIcons(true);
  };
  const handleSentValue = () => {
    postCategory();
    setCatModal(false);
  };

  const postCategory = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${apiUrl}/category/customer`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(catForm),
      });
      if (!res.ok) {
        console.log("error", res.status);
      }

      // Parse the JSON response
      if (res.status === 200) {
        toast.success("Амжилттай нэмэгдлээ ");
        setRefresh((prev) => !prev);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full"
        onClick={() => {
          setCatModal(true);
        }}
      >
        + Add Category
      </button>

      {catModal && (
        <dialog open className="modal modal-middle">
          <div className="modal-box max-w-[500px] max-h-[1000px] ">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Add Category</h3>
              <button
                className="btn-square"
                onClick={() => {
                  setCatModal(false);
                }}
              >
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
            <div className="">
              <div className="flex gap-2">
                <button className="btn" onClick={handleClick}>
                  open icons
                </button>
                <input
                  type="text"
                  placeholder="Category name"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) =>
                    setCatForm((preCatFrom) => ({
                      ...preCatFrom,
                      catName: e.target.value,
                    }))
                  }
                />
              </div>
              <button
                className="font-normal text-base py-2 px-14 rounded-[20px] m-2 bg-green-700 w-full"
                onClick={handleSentValue}
              >
                Add
              </button>
            </div>
          </div>
        </dialog>
      )}
      {openIcons && (
        <dialog open className="modal mt-4 top-[200px]">
          <div className="modal-box">
            <Icons setCatForm={setCatForm} />
            <Colors setCatForm={setCatForm} />
            <button
              className="btn flex justify-center w-full my-2"
              onClick={() => {
                setOpenIcons(false);
              }}
            >
              close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};
export default CatModal;
