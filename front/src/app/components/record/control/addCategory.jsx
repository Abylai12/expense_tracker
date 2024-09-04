import React from "react";

const AddCategory = () => {
  return (
    <div>
      <h1>Category</h1>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Food & Drinks</div>
        <div className="collapse-content">
          <button>delete</button>
        </div>
      </div>
      <button>+ Add Category</button>
    </div>
  );
};

export default AddCategory;
