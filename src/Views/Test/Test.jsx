import { Lightbulb, LogIn, User, UserPlus } from "lucide-react";
import React, { useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* User Icon */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300"
      >
        <span className="text-xl font-bold text-gray-600">
          <User strokeWidth={2.75} />
        </span>
      </button>

      {/* Modal */}
      <div
        className={`absolute right-0 z-50 p-2 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 "
        }`}
      >
        <ul className="py-3 text-gray-600 font-semibold text-sm">
          <li className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer flex items-center gap-3">
            <LogIn strokeWidth={1.75} />
            Connexion
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer flex items-center gap-3">
            <UserPlus strokeWidth={1.75} />
            Inscription
          </li>
          <hr className="mt-2" />
          <li className="px-4 my-4 py-2 flex items-center rounded-lg justify-between hover:bg-gray-100 cursor-pointer">
            <span className="flex items-center gap-3">
              <Lightbulb strokeWidth={1.75} />
              Changer de thème
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-green-400 transition"></div>
            </label>
          </li>
          <hr />
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer mt-2 rounded-lg">
            Lorem
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg mt-2">
            Confidentialité
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
