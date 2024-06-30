const AllHotel = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full">
      <h1 className="text-yellows text-5xl font-joining mx-auto rounded-lg shadow-lg shadow-yellows">
        All Rooms
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-0 2xl:ml-10 w-full">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs text-black uppercase bg-yellows ">
            <tr>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Hotel-Name
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Hotel-Prices
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Hotel-Type
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Room-Count
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Location
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Reviews-Count
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Availability
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
                <p className="text-white">Alpha Hotel</p>
              </th>
              <td className="text-xs px-2 2xl:px-6 py-4">23000pkr</td>
              <td className="text-xs px-2 2xl:px-6 py-4">Luxury Hotel</td>

              <td className="text-xs px-2 2xl:px-6 py-4">100</td>

              <td className="text-xs px-2 2xl:px-6 py-4">BeachFront</td>
              <td className="text-xs px-2 2xl:px-6 py-4">04</td>
              <td className="text-xs px-2 2xl:px-6 py-4">Available</td>

              <td className="text-xs px-2 2xl:px-6 py-4">
                <a
                  href="#"
                  className="mr-2 font-medium text-red-600 hover:underline"
                >
                  Delete
                </a>

                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>

            <tr className="odd:bg-fade-black even:bg-light-black border-b dark:border-gray-700 font-radios">
              <th
                scope="row"
                className="text-xs px-2 2xl:px-6 py-4 font-medium whitespace-nowrap text-white font-radios"
              >
                <p className="text-white">Alpha Hotel</p>
              </th>
              <td className="text-xs px-2 2xl:px-6 py-4">23000pkr</td>
              <td className="text-xs px-2 2xl:px-6 py-4">Luxury Hotel</td>

              <td className="text-xs px-2 2xl:px-6 py-4">100</td>

              <td className="text-xs px-2 2xl:px-6 py-4">BeachFront</td>
              <td className="text-xs px-2 2xl:px-6 py-4">04</td>
              <td className="text-xs px-2 2xl:px-6 py-4">Available</td>

              <td className="text-xs px-2 2xl:px-6 py-4">
                <a
                  href="#"
                  className="mr-2 font-medium text-red-600 hover:underline"
                >
                  Delete
                </a>

                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllHotel;
