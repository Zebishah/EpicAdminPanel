import { useState } from "react";

const AddRoom = () => {
  const [features, setFeatures] = useState([]);
  const [formData, setFormData] = useState({
    image: null,
    imageUrl: "",
  });
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
  const handleInputChange = (e) => {
    const value = e.target.value;
    setFeatures(value.split(",").map((feature) => feature.trim()));
  };
  return (
    <>
      <div className="landing-page flex flex-col space-y-8 justify-center items-center w-[100%] mt-16 overflow-hidden">
        <h1 className="text-yellows text-5xl font-joining rounded-lg shadow-lg shadow-yellows">
          Add Room Form
        </h1>
        <section className="bg-white dark:bg-fade-black flex w-[90%] mt-8 rounded-xl shadow-lg shadow-black">
          <div className="py-8 px-4 mx-auto lg:py-16 w-[90%] ">
            <h2 className="mb-4 text-xl font-bold text-yellows dark:text-yellows">
              Add a new Room
            </h2>
            <form action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="HotelId"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Hotel-Id
                  </label>
                  <input
                    type="text"
                    name="HotelId"
                    id="HotelId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type HotelId"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Room Name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Room Type"
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
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Prices"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Description"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Guests"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    No of Guests
                  </label>
                  <input
                    type="text"
                    name="Guests"
                    id="Guests"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Guests "
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
                    name="Available"
                    id="Available"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="yes"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room Location
                  </label>
                  <input
                    type="text"
                    name="Location"
                    id="Location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Room Location"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Upload image"
                    onChange={handleImageChange}
                  />

                  {formData.imageUrl && (
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="mt-2 h-20 w-20 object-cover rounded"
                    />
                  )}
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="features"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Features (separate each feature with a comma)
                  </label>
                  <textarea
                    name="features"
                    id="features"
                    rows="3"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="e.g. Free WiFi, Breakfast included, Swimming pool"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-yellows text-black inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
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

export default AddRoom;
