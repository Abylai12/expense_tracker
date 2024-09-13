import { DataContext } from "@/app/context/datacontext";
import React, { useContext } from "react";

const AddCategory = () => {
  const { catDatas } = useContext(DataContext);
  console.log("first", catDatas);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-base my-6">Category</h1>
        <button>clear</button>
      </div>
      <div className=" ml-4">
        {catDatas?.map(({ cat_name }) => (
          <div className="flex items-center">
            <img
              src="./images/catImg.png"
              alt="img"
              className="w-[19px] h-[14px]"
            />
            <div className="collapse-title text-base font-normal">
              {cat_name}
            </div>
          </div>
        ))}
        <button className="text-base font-normal">
          <span className="text-blue-700">+</span> Add Category
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
