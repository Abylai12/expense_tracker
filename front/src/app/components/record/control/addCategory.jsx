import { DataContext } from "@/app/context/datacontext";
import React, { useContext } from "react";
import CatModal from "../../modal/catModal";

const AddCategory = () => {
  const { catDatas } = useContext(DataContext);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-base my-6">Category</h1>
      </div>
      <div className=" ml-4">
        {catDatas?.map(({ name }, idx) => (
          <div className="flex items-center" key={idx}>
            <img
              src="./images/catImg.png"
              alt="img"
              className="w-[19px] h-[14px]"
            />
            <div className="collapse-title text-base font-normal">{name}</div>
          </div>
        ))}

        <CatModal />
      </div>
    </div>
  );
};

export default AddCategory;
