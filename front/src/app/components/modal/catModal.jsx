"use client";

import { DataContext } from "@/app/context/datacontext";

import { useContext, useState } from "react";
import Icons from "../icons/icons";
import Colors from "../icons/colors";

const CatModal = () => {
  const { catModal, setCatModal, setCatForm } = useContext(DataContext);
  const [openIcons, setOpenIcons] = useState(false);

  const handleClick = () => {
    setOpenIcons((prevOpen) => !prevOpen);
  };
  const handleSentValue = () => {
    setCatModal(false);
  };
  const handleChange = (e) => {
    setCatForm((preCatFrom) => ({
      ...preCatFrom,
      name: e.target.value,
    }));
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
                  btn
                </button>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button
                className="font-normal text-base py-2 px-14 rounded-[20px] bg-green-700 w-full"
                onClick={handleSentValue}
              >
                Add
              </button>
            </div>
          </div>
        </dialog>
      )}
      {openIcons && (
        <dialog open className="modal top-[200px]">
          <div className="modal-box">
            <Icons />
            <Colors />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};
export default CatModal;

{
  /* <div
className={`p-4 border absolute top-[200px]  ${
  open ? "block" : "hidden"
}`}
>
<Icons />
<Colors />
</div> */
}
