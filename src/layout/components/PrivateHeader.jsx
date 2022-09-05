import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "./images.png";

//Hooks
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const [hidden, setHidden] = useState("hidden");
  const { handleSetAuth, auth } = useAuth();

  const handleLogout = () => {
    handleSetAuth({});
    localStorage.removeItem("access_token");
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-2">
        <Link
          to={"/user"}
          className="flex items-center flex-shrink-0 text-white mr-6"
        >
          <img
            src={logo}
            className="m-5 h-10 sm:h-10"
            alt="Logo"
          />
          <span className="font-bold text-2xl hover:text-slate-200">
            SOS Tutoría UC
          </span>
        </Link>
        <div className="w-full block flex-grow sm:flex items-center sm:w-auto gap-2">
          <div className="text-sm">
            <Link
              to={"request-tutoring"}
              className="inline-block text-sm px-4 py-2 font-bold leading-none rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0"
            >
              Solicitar Tutoría
            </Link>
          </div>
          <div className="text-sm">
            <Link
              to={"survey"}
              className="inline-block text-sm px-4 py-2 font-bold leading-none rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0"
            >
              Completar Survey
            </Link>
          </div>
          <div className="text-sm">
            <Link
              to={"quienes-somos"}
              className="inline-block text-sm px-4 py-2 font-bold leading-none rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0"
            >
              Quiénes somos?
            </Link>
          </div>
          <div className="text-sm flex-1">
            <Link
              to={"como-interactuar"}
              className="inline-block text-sm px-4 py-2 font-bold leading-none rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0"
            >
              Cómo interactuar?
            </Link>
          </div>
          <div className="relative inline-block mb-20">
            <button
              onClick={() => {
                if (hidden) setHidden("");
                else setHidden("hidden");
              }}
              className="inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0"
            >
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <div
              className={`${hidden} absolute right+5 sm:right-5 z-20 w-56 py-2 mr-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800`}
            >
              <Link
                to="#"
                className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <div className="mx-1">
                  <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {auth.name.first + " " + auth.name.last}
                  </h1>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {auth.email}
                  </p>
                </div>
              </Link>

              <hr className="border-gray-200 dark:border-gray-700" />
              <button
                style={{ width: "-webkit-fill-available" }}
                onClick={handleLogout}
                className="font-bold block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
