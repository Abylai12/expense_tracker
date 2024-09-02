import React from "react";

const AddCArd = () => {
  return (
    <div>
      <h1>Records</h1>
      <div>
        <button>+Add</button>
        <input
          type="text"
          placeholder="  Search"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default AddCArd;
