import React from "react";
import { NavLink } from "react-router";
import UserMenu from "../../Views/Test/Test";

export default function NavBar() {
  return (
    <div className="">
      <div className="fixed w-full h-12 flex items-center justify-center bg-rose-600">
        <h1 className="text-white font-bold text-2xl tracking-tight leading-tight uppercase">
          Welcome to HomeTour
        </h1>
      </div>

      <div className="fixed top-12 w-full bg-gray-100 text-black drop-shadow-sm ">
        <div className=" w-10/12 max-w-7xl mx-auto flex h-24 items-center justify-between">
          <NavLink to={"/"}>
            <h1 className="font-bold text-rose-600 text-2xl">HomeTour</h1>
          </NavLink>
          <div className="flex items-center gap-5 ">
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                isActive ? "font-semibold text-rose-600" : ""
              }
            >
              <p>About us </p>
            </NavLink>
            {/* <NavLink
              to={"/buy"}
              className={({ isActive }) =>
                isActive ? "font-semibold text-rose-600" : ""
              }
            >
              <p> Buy</p>
            </NavLink> */}
            <button className="w-fit h-10 rounded-full px-2 bg-gray-50 hover:bg-gray-100 hover:border-gray-500 text-gray-900 border border-gray-200 shadow">
              Devenir partenraire
            </button>

            <div>
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
