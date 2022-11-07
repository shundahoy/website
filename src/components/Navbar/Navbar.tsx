import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              WebSite
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-gray-600" : "text-white"
                  }
                  to={`/`}
                >
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <span className="ml-2">HOME</span>
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-gray-600" : "text-white"
                  }
                  to={`/about/`}
                >
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <span className="ml-2">ABOUT</span>
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-gray-600" : "text-white"
                  }
                  to={`/service`}
                >
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <span className="ml-2">SERVICE</span>
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-gray-600" : "text-white"
                  }
                  to={`/project`}
                >
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <span className="ml-2">PROJECT</span>
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-gray-600" : "text-white"
                  }
                  to={`/product`}
                >
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <span className="ml-2">PRODUCT</span>
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-gray-600" : "text-white"
                  }
                  to={`/contact`}
                >
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <span className="ml-2">CONTACT</span>
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
