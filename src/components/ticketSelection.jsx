import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import TicketTypeButton from "./ticketTypeButton";
import TransparentButton from "./transparentBgButton";
import FilledButton from "./filledBgButton";

const TicketSelection = () => {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ticketType: "",
      numberOfTickets: "",
    },
  });

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      reset(storedFormData);
    }
  }, [reset]);

  const formData = watch();

  useEffect(() => {
    if (formData.ticketType || formData.numberOfTickets) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  const onSubmit = (formData) => {
    console.log(formData);
    localStorage.removeItem("formData");
    navigate("/attendeeForm");
  };

  return (
    <section className="w-[90%] md:w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-[32px] mx-auto text-white p-[48px] mb-[112px]">
      {/* ticket selection header */}
      <section>
        <section className="sm:flex justify-between items-center">
          <p className="text-[32px] font-main">Ticket Selection</p>
          <p className="text-base font-roboto">Step 1/3</p>
        </section>
        <section className="flex w-[100%]">
          <div className="w-[232px] border-b-4 rounded-[5px] border-[var(--color-light-blue)]"></div>
          <div className="w-[604px] border-b-4 rounded-[5px] border-[var(--color-tertiary)]"></div>
        </section>
      </section>

      {/* Techember section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[var(--color-dark-green)] p-[24px] border-x-2 border-b-2 border-[var(--color-grey-green)] rounded-[32px] flex flex-col gap-[32px]"
      >
        {/* Techember sign */}
        <section className="text-center w-full">
          <p className="font-roadrage text-[62px]">Techember Fest &quot;25</p>
          <p className="font-roboto-text-regular">
            Join an unforgettable experience at [Event Name]! Secure your spot
            now.
          </p>
          <p className="font-roboto-text-regular pt-[16px]">
            LocationEmoji [Event Location] <span> | | </span> March 15, 2025 |
            7:00 PM
          </p>
        </section>

        <hr className="h-[4px] bg-[var(--color-grey-green)] border-0" />

        {/* Ticket type section */}
        <section className="flex flex-col gap-[8px]">
          <p className="font-roboto-text-regular">Select Ticket Type:</p>
          <section className="w-[100%] flex justify-between rounded-[24px] bg-[var(--color-darker-green)] p-[16px] border border-[var(--color-grey-green)] shadow-inner ">
            <TicketTypeButton setValue={setValue} />
          </section>
        </section>

        {/* Number of tickets section */}
        <section className="flex flex-col gap-[8px]">
          <p className="font-roboto-text-regular">Number of Tickets</p>
          <select
            className="border border-[var(--color-grey-green)]  rounded-[12px] p-[12px] cursor-pointer"
            name="numberOfTickets"
            id="numberOfTickets"
            {...register("numberOfTickets", {
              required: "Please select number of tickets",
            })}
            aria-describedby="TicketNumberError"
            tabIndex="0"
          >
            <option value="1" className="text-black">
              1
            </option>
            <option value="2" className="text-black">
              2
            </option>
            <option value="3" className="text-black">
              3
            </option>
          </select>
          {errors.numberOfTickets && (
            <p
              id="TicketNumberError"
              aria-live="polite"
              className="text-red-500 text-sm"
            >
              {errors.numberOfTickets.message}
            </p>
          )}
        </section>

        {/* Cancel and Next buttons */}
        <section className="w-full gap-[24px] flex ">
          <TransparentButton text={"Cancel"} />
          <FilledButton text={"Next"} onClick={handleSubmit(onSubmit)} />
        </section>
      </form>
    </section>
  );
};

export default TicketSelection;
