const ChangePassword = () => {
  let changePassword = () => {};
  return (
    <div className="flex flex-col gap-y-10 p-6 items-center w-[80%] ">
      <section className=" w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[100%]">
          <h1 className="flex font-radios items-center mb-6 text-4xl font-semibold text-yellows dark:text-yellows bg-light-black opacity-50 p-4 rounded-lg">
            Update Password
          </h1>
          <div className="w-full p-6 bg-light-black rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md dark:bg-fade-black dark:border-fade-black sm:p-8">
            <h2 className="mb-1 text-xl font-radios font-bold leading-tight tracking-tight text-yellows md:text-2xl dark:text-yellows">
              Change Password
            </h2>
            <form className="mt-4 space-y-8 lg:mt-5 md:space-y-8" action="#">
              <div>
                <label
                  htmlFor="oldPassword"
                  className="block mb-2 text-sm font-radios font-medium text-yellows dark:text-yellows"
                >
                  old Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  placeholder="••••••••"
                  className="bg-fade-black border border-gray-300 text-yellows sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-fade-black dark:border-white dark:placeholder-gray-400 dark:text-yellows dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-radios font-medium text-yellows dark:text-yellows"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-fade-black border border-gray-300 text-yellows sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-fade-black dark:border-white dark:placeholder-gray-400 dark:text-yellows dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-radios font-medium text-yellows dark:text-yellows"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-fade-black border border-gray-300 text-yellows sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-fade-black dark:border-white dark:placeholder-gray-400 dark:text-yellows dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="button"
                onClick={changePassword}
                className="w-full text-yellows shadow-lg bg-fade-black hover:bg-fade-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-radios font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fade-black dark:hover:bg-fade-black dark:focus:ring-primary-800"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;