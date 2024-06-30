import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileSettings = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  //   const { error, updatedDated } = useSelector((state) => state.manageUser);
  //   const { userFrTokenData } = useSelector((state) => state.userSearch);

  //   useEffect(() => {
  //     console.log("search 1");
  //     dispatch(userSearchFrToken());

  //     // Clean up function to reset user search state when the component unmounts
  //   }, []);

  // Effect for setting email when userFrTokenData changes
  //   useEffect(() => {
  //     console.log("search 2");
  //     if (userFrTokenData) {
  //       setEmail(userFrTokenData.userInfo.email);
  //     }
  //   }, [userFrTokenData]);
  //   useEffect(() => {
  //     if (error) {
  //       toast.error("we cant update Your information");
  //     }
  //     console.log(updatedDated);
  //     if (updatedDated) {
  //       console.log("hey");
  //       if (updatedDated.success == true) {
  //         toast.success("Your information updated successfully");
  //       }
  //     }
  //   }, [updatedDated, error]);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    phoneNo: "",
    image: null,
    imageUrl: "",
  });
  const handleUserName = (e) => setUserName(e.target.value);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = async () => {
    // Here you can send the formData to your database
    if (/\s/.test(userName)) {
      return toast.error("Please enter a valid username");
    }
    dispatch(updateUser(formData));

    setFormData({
      fullName: "",
      address: "",
      city: "",
      phoneNo: "",
      image: null,
      imageUrl: "",
    });
    // Clean up: clear the timer when the component unmounts or the effect runs again
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col flex-grow p-6 items-center justify-center">
        <h1 className="text-yellows smd:text-4xl text-xs font-joining bg-light-black bg-opacity-60 p-4 rounded-lg shadow-lg shadow-yellows">
          Admin Profile
        </h1>
        <div className="container max-w-screen-lg mx-auto ">
          <h2 className="font-radios font-semibold smd:text-xl text-xs text-yellows bg-light-black bg-opacity-60 p-3 rounded-lg w-max">
            Update info
          </h2>
          <p className="font-radios text-white mb-6 bg-light-black bg-opacity-60 p-3 rounded-lg w-max mt-1">
            Update your personal info here.
          </p>

          <div className="bg-fade-black rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-yellows">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p className="text-white">Please fill out all the fields.</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-8 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label
                        htmlFor="fullName"
                        className="text-yellows text-lg font-radios"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={userName}
                        onChange={handleUserName}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label
                        htmlFor="email"
                        className="text-yellows text-lg font-radios"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={email}
                        disabled
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label
                        htmlFor="address"
                        className="text-yellows text-lg font-radios"
                      >
                        Address / Street
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="city"
                        className="text-yellows text-lg font-radios"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="phoneNo"
                        className="text-yellows text-lg font-radios"
                      >
                        Phone-No
                      </label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="phoneNo"
                          id="phoneNo"
                          placeholder="Phone-No"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value={formData.phoneNo}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="image"
                        className="text-yellows text-lg font-radios"
                      >
                        Image
                      </label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="file"
                          name="image"
                          id="image"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          onChange={handleImageChange}
                        />
                      </div>
                      {formData.imageUrl && (
                        <img
                          src={formData.imageUrl}
                          alt="Preview"
                          className="mt-2 h-20 w-20 object-cover rounded"
                        />
                      )}
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className=" mt-4 w-auto hover:before:bg-red rounded-xl relative h-[50px] overflow-hidden border border-yellows bg-light-black px-3 text-yellows shadow-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-yellow-400 hover:before:left-0 hover:before:w-full"
                        >
                          <span className="relative z-10 text-radios text-lg">
                            Submit
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;