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
    reset({ ticketType: " ", numberOfTickets: "" });
    localStorage.removeItem("formData");
  };

  const onSubmit = (formData) => {
    console.log(formData);

    navigate("/attendeeForm");
  };

  return (
    <section className="bg-[#041e23] w-[95%] md:w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-8 mx-auto text-white p-10 mb-[112px]">
      <SpecialFormHeader topic={"Ticket Selection"} stepValue={1} />

      {/* Techember section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-[var(--color-dark-green)] px-5 py-[16px] sm:py-[24px] border-x-2 border-b-2 border-[var(--color-greyish-green)] rounded-[32px] flex flex-col gap-[32px]"
      >
        {/* Techember sign */}
        <section className="techember-bg text-center border-x border-b border-[var(--color-greyish-green)] rounded-[24px] shadow-inner p-1 sm:p-5">
          <p className="w-full whitespace-nowrap font-roadrage text-[34px] sm:text-[62px] ">
            Techember Fest &quot;25
          </p>
          <p className="w-full max-w-[340px] mx-auto text-[14px] font-roboto sm:font-roboto sm:text-base">
            Join an unforgettable experience at [Event Name]! Secure your spot
            now.
          </p>
          <section className="w-full mt-7 sm:mt-0 justify-center items-center block sm:flex font-roboto text-base pt-4">
            <p>📍[Event Location] </p>
            <span className="hidden sm:block mx-3"> | | </span>
            <p>March 15, 2025 | 7:00 PM</p>
          </section>
        </section>

        <hr className="h-[4px] bg-[var(--color-grey-green)] border-0" />

        {/* Ticket type section */}
        <section className="flex flex-col gap-2">
          <p className="font-roboto text-base">Select Ticket Type:</p>
          <section className="w-full flex flex-col gap-4 sm:flex sm:flex-row justify-between rounded-3xl bg-[var(--color-darker-green)] p-4 border border-[var(--color-greyish-green)] shadow-inner">
            <TicketTypeButton setValue={setValue} />
          </section>
        </section>

        {/* Number of tickets section */}
        <section className="flex flex-col gap-2">
          <p className="font-roboto text-base">Number of Tickets</p>
          <select
            className="border border-[var(--color-greyish-green)] rounded-xl p-3 cursor-pointer"
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
        <section className="w-full gap-6 hidden sm:flex ">
          <TransparentButton text={"Cancel"} onClick={onCancel} />
          <FilledButton text={"Next"} onClick={handleSubmit(onSubmit)} />
        </section>

        {/* for mobile */}
        <section className="w-full gap-4 flex flex-col sm:hidden ">
          <FilledButton text={"Next"} onClick={handleSubmit(onSubmit)} />
          <TransparentButton text={"Cancel"} onClick={onCancel} />
        </section>
      </form>
    </section>
  );
};

export default TicketSelection;
