import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TransparentButton from "./transparentBgButton";
import FilledButton from "./filledBgButton";
import AvatarUpload from "./avatarUpload";
import SpecialFormHeader from "./specialFormHeader";
import email from "../assets/envelope.svg";

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState(
    localStorage.getItem("avatarUrl") || ""
  );

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("formData")) || {
      avatarUrl,
      fullName: "",
      email: "",
      specialRequest: "",
    },
  });

  const formData = watch();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    if (avatarUrl) {
      localStorage.setItem("avatarUrl", avatarUrl);
    }
  }, [formData, avatarUrl]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const onPrevious = () => {
    console.log("Navigating to previous");
    navigate("/");
  };

  const onSubmit = (data) => {
    if (!avatarUrl) {
      setError("avatar", {
        type: "manual",
        message: "Please upload a profile photo",
      });
      return;
    }
    clearErrors();
    console.log("Form data:", data);
    localStorage.removeItem("formData");
    localStorage.removeItem("avatarUrl");
    navigate("/downloadTicket");
  };

  return (
    <section className="w-[95%] md:w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-[32px] mx-auto text-white p-[48px] mb-[112px]">
      <SpecialFormHeader topic={"Attendee Details"} stepValue={2} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="w-full bg-[var(--color-dark-green)] p-[24px] border border-[var(--color-tertiary)] shadow-inner rounded-[32px] flex flex-col gap-[32px]">
          {/* Avatar Section */}
          <section className="bg-[#052228] flex flex-col gap-[32px] px-[24px] pt-[24px] pb-[48px] rounded-[24px] border border-[var(--color-grey-green)] shadow-inner">
            <p className="font-roboto-text-regular">Upload Profile Photo</p>
            <AvatarUpload setAvatarUrl={setAvatarUrl} />
          </section>
          {errors.avatar && (
            <p className="text-red-500">{errors.avatar.message}</p>
          )}

          <hr className="h-[4px] bg-[var(--color-grey-green)] border-0" />

          {/* Name Input */}
          <section className="flex flex-col gap-[8px]">
            <label htmlFor="fullname" className="font-roboto-text-regular">
              Enter your name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full rounded-[12px] p-[12px] border border-[var(--color-grey-green)]"
              {...register("fullName", { required: "Full Name is required" })}
              aria-describedby="fullNameError"
              onKeyDown={handleKeyDown}
            />
            {errors.fullName && (
              <p
                id="fullNameError"
                aria-live="polite"
                className="text-red-500 text-sm"
              >
                {errors.fullName.message}
              </p>
            )}
          </section>

          {/* Email Input */}
          <section className="flex flex-col gap-[8px]">
            <label htmlFor="email" className="font-roboto-text-regular">
              Enter your email*
            </label>
            <div className="flex items-center w-full border border-[var(--color-grey-green)] rounded-xl h-12 overflow-hidden group hover:border-borderone focus-within:ring-2 focus-within:ring-borderone">
              <div className="pl-3 pr-1">
                <img alt="email icon" src={email} className=" w-5 h-5" />
              </div>
              <input
                id="email"
                aria-required="true"
                aria-invalid="false"
                className="flex-1 bg-transparent p-2 outline-none"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format.",
                  },
                })}
                aria-describedby="emailError"
                onKeyDown={handleKeyDown}
              />
            </div>
            {errors.email && (
              <p
                id="emailError"
                aria-live="polite"
                className="text-red-500 text-sm"
              >
                {errors.email.message}
              </p>
            )}
          </section>

          {/* Special Request Textarea */}
          <section className="flex flex-col gap-[8px]">
            <label
              htmlFor="specialRequest"
              className="hidden sm:block font-roboto-text-regular"
            >
              Special Request?
            </label>
            <label
              htmlFor="specialRequest"
              className="block sm:hidden font-roboto-text-regular"
            >
              About the Project
            </label>
            <textarea
              name="specialRequest"
              id="specialRequest"
              placeholder="Textarea"
              className="h-[127px] rounded-[12px] p-[12px] border border-[var(--color-grey-green)]"
              {...register("specialRequest")}
              onKeyDown={handleKeyDown}
            ></textarea>
          </section>

          {/* buttons */}
          <section className="w-full gap-[24px] hidden sm:flex ">
            <TransparentButton text={"Back"} onClick={onPrevious} />
            <FilledButton text={"Get My Free Ticket"} />
          </section>

          {/* for mobile */}
          <section className="w-full gap-[16px] flex flex-col sm:hidden ">
            <FilledButton text={"Get My Free Ticket"} />
            <TransparentButton text={"Cancel"} onClick={onPrevious} />
          </section>
        </section>
      </form>
    </section>
  );
};

export default AttendeeDetails;
