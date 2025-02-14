import logo from "../assets/logo.svg";
import arrow from "../assets/rightArrow.svg";
import arrowWhite from "../assets/rightArrowWhite.svg";
const Navbar = ({ addPosition }) => {
  return (
    <>
      <section
        className={`${
          addPosition === true ? "absolute z-99 hidden sm:flex" : ""
        } nav-bg w-[85%] xl:w-[1200px] font-main h-[76px] border border-[var(--color-secondary)] rounded-3xl flex items-center justify-between py-[12px] px-[16px] mx-auto mt-[24px]`}
      >
        <img src={logo} className="cursor-pointer" alt="Logo" />

        {/* for medium up, the one inside nav*/}
        <section className="hidden sm:hidden md:flex gap-4 text-lg cursor-pointer">
          <a className="text-white">Events</a>
          <a className="text-[var(--text-color-greyed)]">My Tickets</a>
          <a className="text-[var(--text-color-greyed)]">About Project</a>
        </section>

        <button
          type="button"
          className="group bg-white hover:border hover:border-[#D9D9D9] rounded-xl flex items-center cursor-pointer px-[24px] py-[16px] text-[var(--text-color-dark)] hover:bg-[var(--color-light-blue)]"
        >
          MY TICKETS
          <img
            src={arrow}
            className="ms-[8px] group-hover:hidden"
            alt="right arrow"
          />
          <img
            src={arrowWhite}
            className="ms-[8px] hidden group-hover:block"
            alt="right arrow white"
          />
        </button>
      </section>

      {/* for mobile, one under nav */}
      <section
        className={` ${
          addPosition === true ? "hidden" : "flex sm:hidden"
        }  justify-center gap-9 text-lg cursor-pointer`}
      >
        <a className="text-white">Events</a>
        <a className="text-[var(--text-color-greyed)]">My Tickets</a>
        <a className="text-[var(--text-color-greyed)]">About Project</a>
      </section>
    </>
  );
};

export default Navbar;
