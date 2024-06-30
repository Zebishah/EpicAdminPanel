import { useState } from "react";

const AddTransport = () => {
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
  return (
    <>
      <div className="landing-page h-screen flex flex-col space-y-10 justify-center items-center w-full overflow-hidden ">
        <h1 className="text-yellows text-5xl font-joining rounded-lg shadow-lg shadow-yellows">
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
                    name="name"
                    id="name"
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
                    name="price"
                    id="price"
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
                    name="AllowedGuest"
                    id="AllowedGuest"
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
                    name="Available"
                    id="Available"
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
                <div className="overflow-hidden md:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={8}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                    defaultValue={""}
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

export default AddTransport;
