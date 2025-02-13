import logo from "../assets/logo.svg";
import arrow from "../assets/rightArrow.svg";
const Navbar = ({ addPosition }) => {
  return (
    <section
      className={`${
        addPosition === true ? "absolute z-99 " : ""
      } bg-[var(--nav-bg)] font-main w-[1200px] h-[76px] border border-[var(--color-secondary)] rounded-3xl flex items-center py-[12px] justify-between mx-auto px-[16px] mt-[24px]`}
    >
      <img src={logo} className="cursor-pointer" alt="Logo" />

      <section className=" flex gap-4 text-lg cursor-pointer">
        <a className="text-white">Events</a>
        <a className="text-[var(--text-color-greyed)]">My Tickets</a>
        <a className="text-[var(--text-color-greyed)]">About Project</a>
      </section>

      <button className="bg-white rounded-xl flex items-center cursor-pointer px-[24px] py-[16px] text-[var(--text-color-dark)]">
        MY TICKETS <img src={arrow} alt="right arrow" />
      </button>
    </section>
  );
};

export default Navbar;
