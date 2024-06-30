import { faCar, faHotel, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const BookingOptions = () => {
  return (
    <div className="flex flex-col justify-center gap-y-10 p-6 items-center w-[100%] ">
      <h1 className="text-yellows text-5xl font-joining bg-light-black bg-opacity-70 p-4 rounded-lg shadow-lg shadow-yellows ">
        User Bookings
      </h1>
      <section className="benefits-container grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-16 w-[80%]">
        <Link to={"/BookedTours"}>
          <div className="benefit-card bg-fade-black rounded-md shadow-lg p-4 flex flex-col items-center gap-y-3 ">
            <FontAwesomeIcon
              icon={faMap}
              className="text-yellows text-4xl items-center"
            ></FontAwesomeIcon>
            <div className="flex flex-col gap-y-0 justify-center items-center">
              <h3 className="text-xl font-semibold mb-2 text-yellows ">
                Tours Booking
              </h3>
              <p className="text-white text-center ">
                Thrilling adventures await! Join us for adrenaline-pumping
                journeys experiences worldwide.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/BookedHotels"}>
          <div className="benefit-card bg-fade-black rounded-md shadow-lg p-4 flex flex-col items-center gap-y-3">
            <FontAwesomeIcon
              icon={faHotel}
              className="text-yellows text-4xl items-center"
            ></FontAwesomeIcon>
            <div className="flex flex-col gap-y-0 justify-center items-center">
              <h3 className="text-xl font-semibold mb-2 text-yellows text-center">
                Hotel Bookings
              </h3>
              <p className="text-white text-center">
                Thrilling adventures await! Join us for adrenaline-pumping
                journeys experiences worldwide.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/BookedTransport"}>
          <div className="benefit-card bg-fade-black rounded-md shadow-lg p-4 flex flex-col items-center gap-y-3 ">
            <FontAwesomeIcon
              icon={faCar}
              className="text-yellows text-4xl items-center"
            ></FontAwesomeIcon>
            <div className="flex flex-col gap-y-0 justify-center items-center">
              <h3 className="text-xl font-semibold mb-2 text-yellows text-center">
                transport Bookings
              </h3>
              <p className="text-white text-center">
                Thrilling adventures await! Join us for adrenaline-pumping
                journeys experiences worldwide.
              </p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default BookingOptions;
