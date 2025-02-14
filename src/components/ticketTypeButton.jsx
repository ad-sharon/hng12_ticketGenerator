import { useState, useEffect } from "react";

const tickets = [
  { ticketType: "REGULAR", ticketAmount: "Free" },
  { ticketType: "VIP", ticketAmount: "$50" },
  { ticketType: "VVIP", ticketAmount: "$150" },
];

export default function TicketTypeButton({ setValue }) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    const selectedTicket = tickets[index].ticketType;
    setSelected(index);
    setValue("ticketType", selectedTicket);
    localStorage.setItem("ticketType", selectedTicket);
  };

  useEffect(() => {
    const storedTicketType = localStorage.getItem("ticketType");
    if (storedTicketType) {
      const index = tickets.findIndex(
        (ticket) => ticket.ticketType === storedTicketType
      );
      if (index !== -1) {
        setSelected(index);
        setValue("ticketType", storedTicketType);
      }
    }
  }, [setValue]);

  return (
    <>
      {tickets.map((ticket, index) => (
        <button
          type="button"
          key={index}
          onClick={() => handleClick(index)}
          className={`${
            selected === index ? "bg-[var(--color-bluish-green)]" : ""
          } cursor-pointer hover:bg-[var(--color-blurry-green)] w-full sm:w-[158px] flex flex-col gap-3 sm:gap-5 border-2 sm:border border-[var(--color-secondary)] p-3 rounded-xl`}
        >
          <p className="text-2xl text-left">{ticket.ticketAmount}</p>
          <p className="text-left text-base">
            {ticket.ticketType} ACCESS <br />
            20/52
          </p>
        </button>
      ))}
    </>
  );
}
