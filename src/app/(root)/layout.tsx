import React from "react";
import Navbar from "components/shared/navbar/navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
