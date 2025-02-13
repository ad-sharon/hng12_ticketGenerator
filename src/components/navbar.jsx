import logo from "../assets/logo.svg";
import arrow from "../assets/rightArrow.svg";
const Navbar = ({ addPosition }) => {
  return (
    <section
      className={`${
        addPosition === true ? "absolute z-99 " : ""
      } w-[85%] xl:w-[1200px] bg-[var(--nav-bg)] font-main h-[76px] border border-[var(--color-secondary)] rounded-3xl flex items-center justify-between py-[12px] px-[16px]  mx-auto mt-[24px]`}
    >
      <img src={logo} className="cursor-pointer" alt="Logo" />

      <section className="hidden md:flex gap-4 text-lg cursor-pointer">
        <a className="text-white">Events</a>
        <a className="text-[var(--text-color-greyed)]">My Tickets</a>
        <a className="text-[var(--text-color-greyed)]">About Project</a>
      </section>

      <button
        type="button"
        className="bg-white rounded-xl flex items-center cursor-pointer px-[24px] py-[16px] text-[var(--text-color-dark)]"
      >
        MY TICKETS <img src={arrow} className="ms-[8px]" alt="right arrow" />
      </button>
    </section>
  );
};

export default Navbar;
