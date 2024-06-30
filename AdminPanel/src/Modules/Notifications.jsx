// import io from "socket.io-client";

const Notifications = () => {
  const notification = [
    {
      title: "System Update",
      message: "The system will be down for maintenance at midnight.",
      date: "2023-06-01T14:48:00.000Z",
    },
    {
      title: "New Feature Released",
      message: "Check out the new dashboard feature now available.",
      date: "2023-06-02T09:30:00.000Z",
    },
    {
      title: "Reminder",
      message: "Don't forget to submit your quarterly report by Friday.",
      date: "2023-06-03T08:00:00.000Z",
    },
  ];
  // const [notification, setNotifications] = useState([]);
  // useEffect(() => {
  //   dispatch(userNotifications());
  //   const socket = io("http://localhost:5000");
  //   console.log("Attempting to connect to server...");

  //   socket.on("connect", () => {
  //     console.log("Connected to server");
  //   });

  //   socket.on("notification", (data) => {
  //     console.log("Notification received:", data);
  //     setNotifications((prev) => [...prev, data]);
  //   });

  //   socket.on("connect_error", (error) => {
  //     console.error("Connection error:", error);
  //   });

  //   socket.on("error", (error) => {
  //     console.error("Socket error:", error);
  //   });

  //   return () => {
  //     socket.disconnect();
  //     console.log("Disconnected from server");
  //   };
  // }, [dispatch]);
  // useEffect(() => {
  //   if (notifications) {
  //     setNotifications(notifications.userNotifications || []);
  //   }
  // }, [notifications]);
  return (
    <div className="flex flex-col gap-y-10 p-6 items-center w-[100%] ">
      <h1 className="text-yellows text-lg lg:text-4xl font-joining bg-light-black bg-opacity-60 p-4 rounded-lg shadow-lg shadow-yellows">
        Notifications
      </h1>

      <div className="flex flex-col gap-y-6 flex-grow flex-wrap items-center min-h-screen smd:w-[85%] w-[90%]">
        {notification.length > 0 &&
          notification.map((Notification, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-fade-black rounded-lg shadow-xl shadow-fade-black mx-auto relative w-full"
            >
              <span className="text-xs font-bold uppercase px-2 mt-2 mr-2 text-green-900 bg-green-400 border rounded-full absolute top-0 right-0">
                New
              </span>
              <span className="text-xs font-bold uppercase m-1 py-1 mr-3 text-white absolute bottom-0 right-0 font-radios">
                {new Date(Notification.date).toLocaleString()}
              </span>
              <img
                className="h-12 w-12 rounded-full"
                alt="John Doe's avatar"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
              />
              <div className="ml-5">
                <h4 className="text-lg font-radios leading-tight text-yellows">
                  {Notification.title}
                </h4>
                <p className="text-sm text-white">{Notification.message}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notifications;
