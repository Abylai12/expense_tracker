import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <div>{children}</div>
    </section>
  );
};

export default Layout;