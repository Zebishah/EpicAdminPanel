import axios from "axios";
import { useState } from "react";

const AddTransport = () => {
  const [formData, setFormData] = useState({
    image: null,
    imageUrl: null,
    carName: "",
    prices: "",
    seats: "",
    type: "",
    description: "",
    allowedGuests: "",
    available: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: file,
        imageUrl: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.image);
    // Handle form submission, e.g., send formData to the server
    try {
      const response = await axios.post(
        `http://localhost:5000/Transport/addTransport`,
        {
          carName: formData.carName,
          prices: formData.prices,
          seats: formData.seats,
          type: formData.type,
          description: formData.description,
          image: formData.imageUrl,
          allowedGuests: formData.allowedGuests,
          available: formData.available,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      console.log(data.success);

      // if (data.success === false) {
      //   toast.error(data.message);
      // }
      if (data.success && data.success === true) {
        console.log("Transport added");
      }

      console.log("Successful");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen space-y-10 overflow-hidden landing-page ">
        <h1 className="text-5xl rounded-lg shadow-lg text-yellows font-joining shadow-yellows">
          Add Transport Form
        </h1>
        <section className="bg-white dark:bg-fade-black flex w-[90%] mt-8 rounded-lg shadow-lg shadow-black">
          <div className="py-8 px-4 mx-auto lg:py-16 w-[90%] ">
            <h2 className="mb-4 text-xl font-bold text-yellows dark:text-yellows">
              Add a new Transport
            </h2>
            <form action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Car Name
                  </label>
                  <input
                    type="text"
                    name="carName"
                    id="carName"
                    value={formData.carName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type car name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="seats"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Seats
                  </label>
                  <input
                    type="text"
                    name="seats"
                    id="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="seats"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="prices"
                    id="prices"
                    value={formData.prices}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="price"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="category"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="AllowedGuest"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Allowed Guest
                  </label>
                  <input
                    type="text"
                    name="allowedGuests"
                    id="allowedGuests"
                    value={formData.allowedGuests}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="AllowedGuest"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Available"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Available
                  </label>
                  <input
                    type="text"
                    name="available"
                    id="available"
                    value={formData.available}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Availability"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>

                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Upload image"
                    onChange={handleImageChange}
                  />

                  {formData.imageUrl && (
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="object-cover w-20 h-20 mt-2 rounded"
                    />
                  )}
                </div>
                <div className="overflow-hidden md:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={8}
                    value={formData.description}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-yellows text-black inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                onClick={handleSubmit}
              >
                Add product
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddTransport;
