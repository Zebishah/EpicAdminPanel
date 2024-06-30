import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../images/man-user-circle-icon.png";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { GrCatalog } from "react-icons/gr";
import { IoMdCash } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { FaBullhorn } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useState } from "react";
const SideBar = () => {
  let [Open, setOpen] = useState(false);
  let openMenu = () => {
    setOpen(true);
  };
  let closeMenu = () => {
    setOpen(false);
  };
  return (
    <div
      className={`flex z-50 flex-col gap-y-4 xl:justify-start xl:items-center bg-[#161817] p-4  ${
        Open ? "w-[88%]" : "w-[28%]"
      } xl:w-[102%] shadow-lg shadow-fade-black transition-all duration-500 ease-in-out ${
        Open ? "expanded" : "collapsed"
      }`}
    >
      <div className="flex-col gap-y-2 justify-center items-center p-2 hidden xl:flex">
        <img src={image} alt="image" className="rounded-full w-16 h-16" />
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-yellows text-lg font-Lexend">Zohaib Haider</h2>
          <p className="text-yellows text-sm font-radios">Administrator</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 justify-start items-start xl:justify-center xl:items-start">
        {!Open && (
          <GiHamburgerMenu
            className="text-yellows text-xl flex xl:hidden "
            size={20}
            onClick={openMenu}
          />
        )}
        {Open && (
          <ImCross
            className="text-yellows text-xl flex xl:hidden ml-20"
            size={20}
            onClick={closeMenu}
          />
        )}
        <Link to={"/Dashboard"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <FontAwesomeIcon
              icon={faDashboard}
              className="text-yellows text-lg mt-3 md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Dashboard
            </h3>
          </div>
        </Link>
        <Link to={"/CatalogOptions"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <GrCatalog size={20} className="text-yellows mt-3 md:mt-0" />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Catalog
            </h3>
          </div>
        </Link>
        <Link to={"/PaymentOptions"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <IoMdCash size={20} className="text-yellows text-lg mt-3 md:mt-0" />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Payments
            </h3>
          </div>
        </Link>
        <Link to={"/Reviews"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <MdReviews
              size={20}
              className="text-yellows text-lg mt-3 md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Reviews
            </h3>
          </div>
        </Link>
        <Link to={"/Notification"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <IoIosNotifications
              size={20}
              className="text-yellows text-lg mt-3 md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Notifications
            </h3>
          </div>
        </Link>
        <Link to={"/BookingOptions"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <IoBookSharp
              size={20}
              className="text-yellows text-lg mt-3 md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Bookings
            </h3>
          </div>
        </Link>
        <Link to={"/DatabaseOptions"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <FaDatabase
              size={20}
              className="text-yellows text-lg mt-3 md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Database
            </h3>
          </div>
        </Link>
        <Link to={"/Update"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <FaBullhorn
              size={20}
              className="text-yellows text-lg mt-3 md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Updates
            </h3>
          </div>
        </Link>
        <Link to={"/Messages"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <MdMessage
              size={20}
              className="text-yellows text-lg mt-3 md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Messages
            </h3>
          </div>
        </Link>
        <Link to={"/Services"}>
          <div className="flex gap-x-0 md:gap-x-2 items-center transition-all duration-500 ease-in-out">
            <IoLogOutSharp
              size={20}
              className="text-yellows text-lg mt-3 md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Add Services
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
