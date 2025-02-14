import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import TicketTypeButton from "./ticketTypeButton";
import TransparentButton from "./transparentBgButton";
import FilledButton from "./filledBgButton";
import SpecialFormHeader from "./specialFormHeader";

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
      ticketType: "REGULAR",
      numberOfTickets: "1",
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

  const onCancel = (e) => {
    e.preventDefault();
    console.log("Resetting form...");
    reset({ ticketType: " ", numberOfTickets: "" });
    localStorage.removeItem("formData");
  };

  const onSubmit = (formData) => {
    console.log(formData);
    // localStorage.removeItem("formData");
    // console.log("removing data", formData);
    navigate("/attendeeForm");
  };

  return (
    <section className="bg-[#041e23] w-[95%] md:w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-[32px] mx-auto text-white p-[48px] mb-[112px]">
      <SpecialFormHeader topic={"Ticket Selection"} stepValue={1} />

      {/* Techember section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-[var(--color-dark-green)] px-[24px] py-[16px] sm:py-[24px] border-x-2 border-b-2 border-[var(--color-grey-green)] rounded-[32px] flex flex-col gap-[32px]"
      >
        {/* Techember sign */}
        <section className="techember-bg text-center border-x border-b border-[#07373F] rounded-[24px] shadow-inner p-[14px] sm:p-[20px]">
          <p className="w-full whitespace-nowrap font-roadrage text-[48px] sm:text-[62px] ">
            Techember Fest &quot;25
          </p>
          <p className="w-full sm:max-w-[340px] mx-auto text-[14px] font-roboto sm:font-roboto-text-regular">
            Join an unforgettable experience at [Event Name]! Secure your spot
            now.
          </p>
          <section className="w-full mt-7 sm:mt-0 justify-center items-center block sm:flex font-roboto-text-regular pt-[16px]">
            <p>📍[Event Location] </p>
            <span className="hidden sm:block mx-3"> | | </span>
            <p>March 15, 2025 | 7:00 PM</p>
          </section>
        </section>

        <hr className="h-[4px] bg-[var(--color-grey-green)] border-0" />

        {/* Ticket type section */}
        <section className="flex flex-col gap-[8px]">
          <p className="font-roboto-text-regular">Select Ticket Type:</p>
          <section className="w-full flex flex-col gap-[16px] sm:flex sm:flex-row justify-between rounded-[24px] bg-[var(--color-darker-green)] p-[16px] border border-[var(--color-grey-green)] shadow-inner ">
            <TicketTypeButton setValue={setValue} />
          </section>
        </section>

        {/* Number of tickets section */}
        <section className="flex flex-col gap-[8px]">
          <p className="font-roboto-text-regular">Number of Tickets</p>
          <select
            className="border border-[var(--color-grey-green)] rounded-[12px] p-[12px] cursor-pointer"
            name="numberOfTickets"
            id="numberOfTickets"
            {...register("numberOfTickets", {
              required: "Please select number of tickets",
            })}
            aria-describedby="TicketNumberError"
            tabIndex="0"
            defaultValue={1}
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
        <section className="w-full gap-[24px] hidden sm:flex ">
          <TransparentButton text={"Cancel"} onClick={onCancel} />
          <FilledButton text={"Next"} onClick={handleSubmit(onSubmit)} />
        </section>

        {/* for mobile */}
        <section className="w-full gap-[16px] flex flex-col sm:hidden ">
          <FilledButton text={"Next"} onClick={handleSubmit(onSubmit)} />
          <TransparentButton text={"Cancel"} onClick={onCancel} />
        </section>
      </form>
    </section>
  );
};

export default TicketSelection;
