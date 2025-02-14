import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    console.log("Navigating to previous page");
    navigate("/");
  };

  const onSubmit = () => {
    if (!avatarUrl) {
      setError("avatar", {
        type: "manual",
        message: "Please upload a profile photo",
      });
      return;
    }
    clearErrors("avatar");
    localStorage.removeItem("formData");
    localStorage.removeItem("avatarUrl");
    console.log(formData);
    navigate("/downloadTicket");
  };

  return (
    <section className="w-[95%] md:w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-8 mx-auto text-white p-12 /mb-[112px]">
      <SpecialFormHeader topic={"Attendee Details"} stepValue={2} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="w-full bg-[var(--color-dark-green)] p-6 border border-[var(--color-tertiary)] shadow-inner rounded-[32px] flex flex-col gap-8">
          {/* Avatar Section */}
          <section className="bg-[var(--color-darker-green)] flex flex-col gap-8 px-6 pt-6 pb-12 rounded-3xl border border-[var(--color-greyish-green)] shadow-inner">
            <p className="font-roboto text-base">Upload Profile Photo</p>
            <AvatarUpload
              setAvatarUrl={setAvatarUrl}
              onClick={() => clearErrors("avatar")}
            />
          </section>
          {errors.avatar && (
            <p className="text-red-500">{errors.avatar.message}</p>
          )}

          <hr className="h-1 bg-[var(--color-greyish-green)] border-0" />

          {/* Name Input */}
          <section className="flex flex-col gap-2">
            <label htmlFor="fullname" className="font-roboto text-base">
              Enter your name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full rounded-xl p-3 border border-[var(--color-greyish-green)]"
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
          <section className="flex flex-col gap-2">
            <label htmlFor="email" className="font-roboto text-base">
              Enter your email*
            </label>
            <div className="flex items-center pl-1 w-full border border-[var(--color-greyish-green)] rounded-xl h-12 overflow-hidden focus-within:ring-1 ">
              <div className="">
                <img
                  alt="email icon"
                  src={email}
                  className="min-w-5 w-full h-full"
                />
              </div>
              <input
                id="email"
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
          <section className="flex flex-col gap-2">
            <label
              htmlFor="specialRequest"
              className="hidden sm:block font-roboto text-base"
            >
              Special Request?
            </label>
            <label
              htmlFor="specialRequest"
              className="block sm:hidden font-roboto text-base"
            >
              About the Project
            </label>
            <textarea
              name="specialRequest"
              id="specialRequest"
              placeholder="Textarea"
              className="h-32 rounded-xl p-3 border border-[var(--color-greyish-green)]"
              {...register("specialRequest")}
              onKeyDown={handleKeyDown}
            ></textarea>
          </section>

          {/* buttons */}
          <section className="w-full gap-6 hidden sm:flex ">
            <TransparentButton text={"Back"} onClick={onPrevious} />
            <FilledButton text={"Get My Free Ticket"} />
          </section>

          {/* for mobile */}
          <section className="w-full gap-4 flex flex-col sm:hidden ">
            <FilledButton text={"Get My Free Ticket"} />
            <TransparentButton text={"Cancel"} onClick={onPrevious} />
          </section>
        </section>
      </form>
    </section>
  );
};

export default AttendeeDetails;
