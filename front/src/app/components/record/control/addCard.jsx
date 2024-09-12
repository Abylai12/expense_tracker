import { UserContext } from "@/app/context/mycontext";
import React, { useContext } from "react";

const AddCArd = () => {
  const { searchValue, setSearchValue } = useContext(UserContext);
  return (
    <div>
      <h1 className="font-semibold text-2xl">Records</h1>
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 w-full my-6 rounded-full">
          +Add
        </button>
        <input
          type="text"
          placeholder="  Search"
          className="input input-bordered w-full p-4"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddCArd;
