import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import arrow from "../assets/rightArrow.svg";
import arrowWhite from "../assets/rightArrowWhite.svg";
const Navbar = ({ addPosition }) => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className={`${
          addPosition === true ? "absolute z-99 hidden sm:flex" : ""
        } nav-bg w-[85%] xl:w-[1200px] font-main h-19 border border-[var(--color-secondary)] rounded-3xl flex items-center justify-between px-4 mx-auto mt-6`}
      >
        <img
          src={logo}
          onClick={() => navigate("/about")}
          className="cursor-pointer"
          alt="Logo"
        />

        {/* for medium up, the one inside nav*/}
        <section className="hidden sm:hidden md:flex gap-4 text-lg cursor-pointer">
          <a className="text-white" onClick={() => navigate("/")}>
            Events
          </a>
          <a className="text-[var(--text-color-greyed)]">My Tickets</a>
          <a
            className="text-[var(--text-color-greyed)]"
            onClick={() => navigate("/about")}
          >
            About Project
          </a>
        </section>

        <button
          type="button"
          className="group bg-[var(--text-color-light)] hover:border hover:border-[var(--text-color-light)] rounded-xl flex items-center cursor-pointer px-6 py-4 text-[var(--text-color-dark)] hover:bg-[var(--color-light-blue)]"
        >
          MY TICKETS
          <img
            src={arrow}
            className="ms-2 group-hover:hidden"
            alt="right arrow"
          />
          <img
            src={arrowWhite}
            className="ms-[8px] hidden group-hover:block"
            alt="right arrow up white"
          />
        </button>
      </section>

      {/* for mobile, one under nav */}
      <section
        className={` ${
          addPosition === true ? "hidden" : "flex md:hidden"
        } w-full font-main justify-center gap-9 text-lg cursor-pointer`}
      >
        <a className="text-white" onClick={() => navigate("/about")}>
          Events
        </a>
        <a className="text-[var(--text-color-greyed)]">My Tickets</a>
        <a
          className="text-[var(--text-color-greyed)]"
          onClick={() => navigate("/about")}
        >
          About Project
        </a>
      </section>
    </>
  );
};

export default Navbar;
