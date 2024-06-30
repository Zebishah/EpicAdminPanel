const BookedTours = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full">
      <h1 className="text-yellows text-5xl font-joining mx-auto rounded-lg shadow-lg shadow-yellows">
        Tour Bookings
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-0 2xl:ml-10 w-full">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs text-black uppercase bg-yellows  ">
            <tr>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Tour-Id
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Tour-Name
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Booking-Date
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Booker-Name
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Booker-Email
              </th>
              <th scope="col" className="px-2 2xl:px-6 py-3 font-radios">
                Amount
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
                <p className="text-white"> 123214212342341</p>
              </th>
              <td className="text-xs px-2 2xl:px-6 py-4">Swaat Summer tour</td>
              <td className="text-xs px-2 2xl:px-6 py-4">2012-08-12</td>

              <td className="text-xs px-2 2xl:px-6 py-4">Zohaib Haider</td>
              <td className="text-xs px-2 2xl:px-6 py-4">
                zebihaider123@gmail.com
              </td>
              <td className="text-xs px-2 2xl:px-6 py-4">4000pkr</td>
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
                className="text-xs px-2 2xl:px-6 py-4 font-medium whitespace-nowrap text-white font-radios"
              >
                <p className="text-white"> 123214212342341</p>
              </th>
              <td className="text-xs px-2 2xl:px-6 py-4">Swaat Summer tour</td>
              <td className="text-xs px-2 2xl:px-6 py-4">2012-08-12</td>

              <td className="text-xs px-2 2xl:px-6 py-4">Zohaib Haider</td>
              <td className="text-xs px-2 2xl:px-6 py-4">
                zebihaider123@gmail.com
              </td>
              <td className="text-xs px-2 2xl:px-6 py-4">4000pkr</td>
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

export default BookedTours;
