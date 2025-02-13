import { useState, useEffect } from "react";

export default function TicketTypeButton({ setValue }) {
  const [selected, setSelected] = useState(null);

  const tickets = [
    { ticketType: "REGULAR ACCESS", ticketAmount: "Free" },
    { ticketType: "VIP ACCESS", ticketAmount: "$50" },
    { ticketType: "VVIP ACCESS", ticketAmount: "$150" },
  ];

  const handleClick = (index) => {
    const selectedTicket = tickets[index].ticketType;
    setSelected(index);
    setValue("ticketType", selectedTicket); //set value in local storage
    localStorage.setItem("ticketType", selectedTicket); //persist value
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
          } cursor-pointer hover:bg-[#2c545b] w-[158px] flex flex-col gap-[20px] border border-[var(--color-secondary)] p-[12px] rounded-[12px]`}
        >
          <p className="text-[24px] text-left">{ticket.ticketAmount}</p>
          <p className="text-left text-[16px]">
            {ticket.ticketType} <br />
            20/52
          </p>
        </button>
      ))}
    </>
  );
}
