import React from "react";

const Layout = ({ children }) => {
  return (
    <section>
      <div className="px-[120px] py-4 flex justify-between">
        <div className="flex items-center gap-6">
          <img src="./images/singlelogo.png" alt="img" className="w-10 h-10" />
          <h1 className="font-semibold text-base text-slate-900">Dashboard</h1>
          <p className="font-normal text-base text-slate-900">Records</p>
        </div>
        <div className="flex gap-6 items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            + Record
          </button>
          <div className="avatar w-10 h-10">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Layout;
