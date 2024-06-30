import { FaTruckPlane } from "react-icons/fa6";
import { MdEmojiTransportation } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { SiGooglemessages } from "react-icons/si";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { RiHotelFill } from "react-icons/ri";
import { FaBed } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import image from "../images/man-user-circle-icon.png";
const Dashboard = () => {
  // const userData = [
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     jobTitle: "Software Engineer",
  //     favoriteColor: "Blue",
  //     warsOfTrek: "Trek",
  //     secretAlias: "JDoe",
  //     dateOfBirth: "1990-01-01",
  //   },
  //   // Add more user data here
  // ];
  return (
    <div className="flex flex-col gap-y-10 justify-start items-start w-full p-4">
      <h1 className="text-yellows text-lg lg:text-4xl font-joining bg-light-black bg-opacity-60 p-4 rounded-lg shadow-lg shadow-yellows">
        Business Stats
      </h1>
      <div className="flex flex-row gap-x-8 2xl:gap-x-32 gap-y-8 flex-wrap justify-start items-start w-full">
        <div className="flex gap-x-8 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaTruckPlane className="text-yellows text-lg" size={50} />
          <div className="flex gap-y-1 flex-col justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className="text-yellows text-lg font-radios">Tours Booked</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <MdEmojiTransportation className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">
              Transport Booked
            </h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaHotel className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">Hotel Booked</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <MdPayments className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">Transactions</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <ImUsers className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">Total Users</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <SiGooglemessages className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">Total Reviews</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <PiAirplaneTiltFill className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">Total Tours</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaCar className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">
              Total Transport
            </h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <RiHotelFill className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">Total Hotels</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaBed className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">Total Rooms</h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaPeopleGroup className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">
              Tours Customers
            </h3>
          </div>
        </div>

        <div className="flex gap-x-4 justify-center items-center bg-fade-black p-6 rounded-xl shadow-lg shadow-black w-auto 2xl:w-[18%]">
          <FaPeopleGroup className="text-yellows text-lg" size={50} />
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-yellows text-3xl font-extrabold font-radios">
              20
            </h1>
            <h3 className=" text-yellows text-lg font-radios">
              Tours Customers
            </h3>
          </div>
        </div>
      </div>
      <h1 className="text-yellows text-lg lg:text-4xl font-joining bg-light-black bg-opacity-60 p-4 rounded-lg shadow-lg shadow-yellows">
        Growth Rate This months
      </h1>
      <div className="flex gap-x-20 w-full justify-center">
        <div className="flex flex-col mt-5 w-[40%] bg-fade-black p-4 rounded-lg shadow-lg shadow-black">
          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium dark:text-white">
              Booked Tours
            </div>
            <div className="mb-1 text-base font-medium dark:text-white">
              30%
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
            <div className="bg-gray-600 h-5 rounded-full dark:bg-gray-300 w-[45%]"></div>
          </div>
          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-700">
              Booked Hotels
            </div>
            <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-700">
              30%
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-5 rounded-full w-[45%]"></div>
          </div>

          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              Booked Transport
            </div>
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              30%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
            <div className="bg-red-600 h-5 rounded-full dark:bg-red-500 w-[45%]"></div>
          </div>

          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              Tour Payments
            </div>
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              30%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
            <div className="bg-green-600 h-5 rounded-full dark:bg-green-500 w-[45%]"></div>
          </div>
        </div>

        <div className="flex flex-col mt-5 w-[40%] bg-fade-black p-4 rounded-lg shadow-lg shadow-black">
          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
              Hotel Payments
            </div>
            <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
              30%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700 ">
            <div className="bg-yellow-400 h-5 rounded-full w-[45%]"></div>
          </div>

          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
              Transport Payment
            </div>
            <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
              30%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
            <div className="bg-indigo-600 h-5 rounded-full dark:bg-indigo-500 w-[45%]"></div>
          </div>
          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              Customers Arrival
            </div>
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              30%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
            <div className="bg-red-600 h-5 rounded-full dark:bg-red-500 w-[45%]"></div>
          </div>

          <div className="flex justify-between">
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              User Interactions
            </div>
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              30%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
            <div className="bg-green-600 h-5 rounded-full dark:bg-green-500 w-[45%]"></div>
          </div>
        </div>
      </div>
      <h1 className="text-yellows text-lg lg:text-4xl font-joining bg-light-black bg-opacity-60 p-4 rounded-lg shadow-lg shadow-yellows">
        Active Users
      </h1>
      {/* table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-0 2xl:ml-2 w-full">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs text-black uppercase bg-yellows  ">
            <tr>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                UserName
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Email
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Address
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Phone
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                To-Booked
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Tr-Booked
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Ho-Booked
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-fade-black even:bg-light-black border-b dark:border-gray-700 font-radios">
              <th
                scope="row"
                className="text-xs px-2 2xl:px-6 py-4 font-medium whitespace-nowrap text-white font-radios"
              >
                <div className="flex gap-x-2 items-center">
                  <img
                    src={image}
                    alt="img"
                    className="w-8 h-8 hidden xl:flex"
                  />
                  <p className="text-white">Zohaib Haider</p>
                </div>
              </th>
              <td className="text-xs px-2 2xl:px-6 py-4">
                zebihaider123@gmail.com
              </td>
              <td className="text-xs px-2 2xl:px-6 py-4">
                G-10 Sector,Islamabad
              </td>
              <td className="text-xs px-2 2xl:px-6 py-4">0310-5904269</td>
              <td className="text-xs px-2 2xl:px-6 py-4">04</td>
              <td className="text-xs px-2 2xl:px-6 py-4">05</td>
              <td className="text-xs px-2 2xl:px-6 py-4">06</td>
              <td className="text-xs px-2 2xl:px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>

            <tr className="odd:bg-fade-black even:bg-light-black border-b dark:border-gray-700 font-radios">
              <th
                scope="row"
                className="text-xs px-2 2xl:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-radios"
              >
                <div className="flex gap-x-2 items-center">
                  <img
                    src={image}
                    alt="img"
                    className="w-8 h-8 hidden xl:flex"
                  />
                  <p className="text-white">Zohaib Haider</p>
                </div>
              </th>
              <td className="text-xs px-2 2xl:px-6 py-4">
                zebihaider123@gmail.com
              </td>
              <td className="text-xs px-2 2xl:px-6 py-4">
                G-10 Sector,Islamabad
              </td>
              <td className="text-xs px-2 2xl:px-6 py-4">0310-5904269</td>
              <td className="text-xs px-2 2xl:px-6 py-4">04</td>
              <td className="text-xs px-2 2xl:px-6 py-4">05</td>
              <td className="text-xs px-2 2xl:px-6 py-4">06</td>
              <td className="text-xs px-2 2xl:px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
