import { useState, useEffect } from "react";

export default function TicketTypeButton({ setValue }) {
  const [selected, setSelected] = useState(0);

  const tickets = [
    { ticketType: "REGULAR", ticketAmount: "Free" },
    { ticketType: "VIP", ticketAmount: "$50" },
    { ticketType: "VVIP", ticketAmount: "$150" },
  ];

  const handleClick = (index) => {
    const selectedTicket = tickets[index].ticketType;
    setSelected(index);
    setValue("ticketType", selectedTicket); //set value in local storage
    localStorage.setItem("ticketType", selectedTicket); //persist value in form
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
            selected === index ? "bg-[#12464E]" : ""
          } cursor-pointer hover:bg-[#2c545b] w-full sm:w-[158px] flex flex-col gap-[12px] sm:gap-[20px] border-2 sm:border border-[var(--color-secondary)] p-[12px] rounded-[12px]`}
        >
          <p className="text-[24px] text-left">{ticket.ticketAmount}</p>
          <p className="text-left text-[16px]">
            {ticket.ticketType} ACCESS <br />
            20/52
          </p>
        </button>
      ))}
    </>
  );
}
