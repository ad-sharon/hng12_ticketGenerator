import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TransparentButton from "./transparentBgButton";
import FilledButton from "./filledBgButton";
import AvatarUpload from "./AvatarUpload"; // Ensure the correct import

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState(
    localStorage.getItem("avatarUrl") || ""
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("formData")) || {
      fullName: "",
      email: "",
      specialRequest: "",
    },
  });

  const formData = watch();

  // Handle page reload data storage and updates
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    if (avatarUrl) {
      localStorage.setItem("avatarUrl", avatarUrl); // Store the avatar URL
    }
  }, [formData, avatarUrl]);

  const onSubmit = (data) => {
    console.log("Form data:", data);
    localStorage.removeItem("formData");
    localStorage.removeItem("avatarUrl");
    navigate("/downloadTicket");
  };

  return (
    <section className="w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-[32px] mx-auto text-white p-[48px] mb-[112px]">
      <section>
        <section className="flex justify-between items-center">
          <p className="text-[32px] font-main">Attendee Details</p>
          <p className="text-base font-roboto">Step 2/3</p>
        </section>
        <section className="flex w-[100%]">
          <div className="w-[232px] border-b-4 rounded-[5px] border-[var(--color-light-blue)]"></div>
          <div className="w-[604px] border-b-4 rounded-[5px] border-[var(--color-tertiary)]"></div>
        </section>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} action="">
        <section className="bg=[var(--color-dark-green)] p-[24px] border-x-2 border-b-2 border-[var(--color-grey-green)] rounded-[32px] flex flex-col gap-[32px]">
          <section className="flex flex-col gap-[32px] px-[24px] pt-[24px] pb-[48px] rounded-[24px] border border-[var(--color-darker-green)] shadow-inner">
            <p className="font-roboto-text-regular">Upload Profile Photo</p>

            {/* Avatar Upload Section */}
            <AvatarUpload setAvatarUrl={setAvatarUrl} />

            {/* Avatar Preview (if available) */}
            {avatarUrl && (
              <section className="flex flex-col items-center">
                <img
                  src={avatarUrl}
                  alt="Avatar Preview"
                  width="150"
                  height="150"
                  className="rounded-full"
                />
                <p className="mt-2 text-sm text-gray-500">Uploaded Avatar</p>
              </section>
            )}
          </section>

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
              tabIndex="0"
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
            <input
              type="email"
              name="email"
              id="email"
              placeholder="hello@avioflagos.io"
              className="w-full rounded-[12px] p-[12px] border border-[var(--color-grey-green)]"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format. Enter a valid email address",
                },
              })}
              aria-describedby="emailError"
              tabIndex="0"
            />
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
              className="font-roboto-text-regular"
            >
              Special Request?
            </label>
            <textarea
              name="specialRequest"
              id="specialRequest"
              placeholder="Textarea"
              className="h-[127px] rounded-[12px] p-[12px] border border-[var(--color-grey-green)]"
              {...register("specialRequest")}
            ></textarea>
          </section>

          {/* Buttons */}
          <section className="w-full gap-[24px] flex">
            <TransparentButton text={"Back"} />
            <FilledButton text={"Get My Free Ticket"} />
          </section>
        </section>
      </form>
    </section>
  );
};

export default AttendeeDetails;
