import image from "../images/Epic_Explorer__1_-removebg-preview.png";
import image2 from "../images/man-user-circle-icon.png";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import dashboard from "../images/dashboard.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  let count = 2;
  return (
    <div className="flex flex-row justify-between items-center bg-[#171817] rounded-xl w-full shadow-lg shadow-fade-black">
      <img src={image} alt="logo" className="h-14 w-14 md:h-28 md:w-28 ml-20" />
      <div className="flex flex-row gap-x-4 justify-center items-center w-full">
        <img src={dashboard} alt="icon" className="h-10 w-10" />
        <h2 className="text-yellows font-Lexend text-xl md:text-2xl text-center mt-2 md:mt-0 ">
          {"Dashboard - Statistics"}
        </h2>
      </div>

      <div className="flex flex-row gap-x-8 justify-center items-center w-full mt-2 md:mt-0">
        <form action="#" className="w-[40%] p-2 hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-3 outline-none cursor-pointer lg:pr-10 py-2 transition-all duration-500 ease-in-out rounded-xl border-2 border-yellows focus:shadow-lg focus:shadow-yellows hover:scale-105 hover:shadow-lg hover:shadow-yellows placeholder:text-yellows placeholder:font-radios text-yellows font-radios bg-light-black"
            />
            <FaSearch
              className="text-yellows absolute right-3 top-1/2 transform -translate-y-1/2"
              size={20}
            />
          </div>
        </form>
        <Link to={"/Update"}>
          <div className="relative inline-block mt-2 md:mt-0">
            <MdOutlineMessage size={25} className="text-yellows" />
            {count > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black bg-yellows rounded-full transform translate-x-1/2 -translate-y-1/2">
                {count}
              </span>
            )}
          </div>
        </Link>
        <Link to={"/Notification"}>
          <div className="relative inline-block mt-2 md:mt-0">
            <IoNotifications size={24} className="text-yellows" />
            {count > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black bg-yellows rounded-full transform translate-x-1/2 -translate-y-1/2">
                {count}
              </span>
            )}
          </div>
        </Link>
        <div className="relative flex gap-x-2 justify-center items-center p-2 mt-2 md:mt-0">
          <img
            src={image2}
            alt="user"
            className="rounded-full w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            onClick={handleToggleMenu}
          />
          <h2
            className="text-yellows text-sm md:text-lg font-Lexend cursor-pointer"
            onClick={handleToggleMenu}
          >
            Zohaib
          </h2>
          {menuOpen && (
            <div className="absolute top-full mt-2 w-48 bg-fade-black shadow-lg shadow-yellows rounded-lg border border-yellow-300">
              <ul className="text-gray-700">
                <li
                  className="px-4 py-2 text-yellows hover:bg-gray-100 hover:text-black cursor-pointer"
                  onClick={"/ProfileSettings"}
                >
                  Profile Settings
                </li>
                <li
                  className="px-4 py-2 text-yellows hover:bg-gray-100 hover:text-black cursor-pointer"
                  onClick={"/ProfileInfo"}
                >
                  View Profile
                </li>
                <li
                  className="px-4 py-2 text-yellows hover:bg-gray-100 hover:text-black cursor-pointer"
                  onClick={"/ChangePassword"}
                >
                  changePassword
                </li>
                <li className="px-4 py-2 text-yellows hover:bg-gray-100 hover:text-black cursor-pointer">
                  LogOut
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
