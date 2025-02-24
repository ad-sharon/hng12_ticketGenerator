import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import arrow from "../assets/rightArrow.svg";
import arrowWhite from "../assets/rightArrowWhite.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
const Navbar = ({ addPosition }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`${
        addPosition === true ? "absolute z-99" : ""
      } nav-bg w-[85%] xl:w-[1200px] font-main h-19 border border-[var(--color-secondary)] rounded-3xl flex items-center justify-between px-4 mx-auto mt-6`}
    >
      <img
        src={logo}
        onClick={() => navigate("/about")}
        className="cursor-pointer"
        alt="Logo"
      />

      {/* for desktop */}
      <section className="hidden md:flex justify-around gap-10 text-lg cursor-pointer">
        <a className="text-white" onClick={() => navigate("/")}>
          Events
        </a>
        <a
          className="text-[var(--text-color-greyed)]"
          onClick={() => navigate("/about")}
        >
          About Project
        </a>
      </section>

      {/* for mobile*/}
      <section
        className={`block md:hidden font-main justify-center gap-9 text-lg cursor-pointer`}
      >
        <Menu as="section" className="relative inline-block text-left ">
          <section>
            <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:ring-1 hover:ring-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </MenuButton>
          </section>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <section className="py-1">
              <MenuItem>
                <a
                  href=""
                  onClick={() => navigate("/")}
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Events
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href=""
                  onClick={() => navigate("/about")}
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  About Project
                </a>
              </MenuItem>
            </section>
          </MenuItems>
        </Menu>
      </section>

      <button
        type="button"
        className="text-[0.7rem] font-bold sm:font-normal sm:text-base whitespace-nowrap group bg-[var(--text-color-light)] hover:border hover:border-[var(--text-color-light)] rounded-xl flex items-center cursor-pointer px-2 sm:px-6 py-4 text-[var(--text-color-dark)] hover:bg-[var(--color-light-blue)]"
      >
        MY TICKETS
        <img
          src={arrow}
          className="ms-1 sm:ms-2 group-hover:hidden"
          alt="right arrow"
        />
        <img
          src={arrowWhite}
          className="ms-[4px] sm:ms-[8px] hidden group-hover:block"
          alt="right arrow up white"
        />
      </button>
    </section>
  );
};

export default Navbar;
