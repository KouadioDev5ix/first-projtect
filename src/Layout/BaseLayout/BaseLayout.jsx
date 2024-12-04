import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

export default function BaseLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col w-10/12 max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
