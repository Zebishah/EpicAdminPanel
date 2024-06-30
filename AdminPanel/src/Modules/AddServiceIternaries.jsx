import { useState } from "react";

const AddServiceIternaries = () => {
  const [tourId, setTourId] = useState("");
  const [priceIncludes, setPriceIncludes] = useState([]);
  const [priceExcludes, setPriceExcludes] = useState([]);
  const [activities, setActivities] = useState([]);
  const [daysServices, setDaysServices] = useState([
    { day: "", services: [""] },
  ]);

  const handleAddPriceInclude = () => setPriceIncludes([...priceIncludes, ""]);
  const handleAddPriceExclude = () => setPriceExcludes([...priceExcludes, ""]);
  const handleAddActivity = () => setActivities([...activities, ""]);
  const handleAddDayService = () =>
    setDaysServices([...daysServices, { day: "", services: [""] }]);

  const handleServiceChange = (index, serviceIndex, value) => {
    const updatedDaysServices = [...daysServices];
    updatedDaysServices[index].services[serviceIndex] = value;
    setDaysServices(updatedDaysServices);
  };

  const handleAddService = (index) => {
    const updatedDaysServices = [...daysServices];
    updatedDaysServices[index].services.push("");
    setDaysServices(updatedDaysServices);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tourData = {
      tourId,
      priceIncludes,
      priceExcludes,
      activities,
      daysServices,
    };
    console.log(tourData);
    // Make API call to backend to save tourData
  };
  return (
    <>
      <div className="landing-page h-screen flex flex-col space-y-6 justify-center items-center w-full ">
        <h1 className="text-yellows text-5xl font-joining bg-light-black bg-opacity-70 p-4 rounded-lg shadow-lg shadow-yellows">
          Add Tour Services
        </h1>
        <div className="container mx-auto p-4">
          <form
            className="bg-fade-black p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl mb-4 text-yellows">Add Tour Information</h2>

            <div className="mb-4">
              <label className="block mb-2 text-yellows">Tour ID</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={tourId}
                onChange={(e) => setTourId(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-yellows">Price Includes</label>
              {priceIncludes.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                  value={item}
                  onChange={(e) => {
                    const updatedIncludes = [...priceIncludes];
                    updatedIncludes[index] = e.target.value;
                    setPriceIncludes(updatedIncludes);
                  }}
                  required
                />
              ))}
              <button
                type="button"
                className="text-yellows"
                onClick={handleAddPriceInclude}
              >
                + Add
              </button>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-yellows">Price Excludes</label>
              {priceExcludes.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                  value={item}
                  onChange={(e) => {
                    const updatedExcludes = [...priceExcludes];
                    updatedExcludes[index] = e.target.value;
                    setPriceExcludes(updatedExcludes);
                  }}
                  required
                />
              ))}
              <button
                type="button"
                className="text-yellows"
                onClick={handleAddPriceExclude}
              >
                + Add
              </button>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-yellows">Activities</label>
              {activities.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                  value={item}
                  onChange={(e) => {
                    const updatedActivities = [...activities];
                    updatedActivities[index] = e.target.value;
                    setActivities(updatedActivities);
                  }}
                  required
                />
              ))}
              <button
                type="button"
                className="text-yellows"
                onClick={handleAddActivity}
              >
                + Add
              </button>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-yellows">Days Services</label>
              {daysServices.map((dayService, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    placeholder="Day"
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    value={dayService.day}
                    onChange={(e) => {
                      const updatedDaysServices = [...daysServices];
                      updatedDaysServices[index].day = e.target.value;
                      setDaysServices(updatedDaysServices);
                    }}
                    required
                  />
                  {dayService.services.map((service, serviceIndex) => (
                    <input
                      key={serviceIndex}
                      type="text"
                      placeholder="Service"
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      value={service}
                      onChange={(e) =>
                        handleServiceChange(index, serviceIndex, e.target.value)
                      }
                      required
                    />
                  ))}
                  <button
                    type="button"
                    className="text-yellows"
                    onClick={() => handleAddService(index)}
                  >
                    + Add Service
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="text-yellows"
                onClick={handleAddDayService}
              >
                + Add Day Service
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-yellows text-black p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddServiceIternaries;
