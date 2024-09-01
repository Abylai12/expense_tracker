import React from "react";
import css from "./loader.module.css";

const Loader = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <img
        src="./images/logo.png"
        className="max-w-[180px] max-h-[64px]"
        alt="img"
      />
      <div className={css.loader}></div>
      <p>Please wait</p>
    </div>
  );
};

export default Loader;
