import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";

function Header({ setView }) {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome, onClick: () => setView("home") },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5 bg-black text-white">
      {/* Left: Logo + Menu */}
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menu.map((item, i) => (
            <div key={i} onClick={item.onClick}>
              <HeaderList name={item.name} Icon={item.icon} />
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden gap-5 relative">
          {menu.slice(0, 3).map((item, i) => (
            <div key={i} onClick={item.onClick}>
              <HeaderList name={""} Icon={item.icon} />
            </div>
          ))}
          <div onClick={() => setToggle(!toggle)}>
            <HeaderList name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 right-0 bg-[#121212] border border-gray-700 p-3 px-5 py-4 z-50">
                {menu.slice(3).map((item, i) => (
                  <div key={i} onClick={item.onClick}>
                    <HeaderList name={item.name} Icon={item.icon} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: Login + Avatar */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setView("login")}
          className="bg-white text-black border border-gray-400 font-semibold px-4 py-1 rounded hover:bg-gray-200 transition duration-200"
        >
          Login
        </button>

        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-[40px] rounded-full"
          alt="User Avatar"
        />
      </div>
    </div>
  );
}

export default Header;
