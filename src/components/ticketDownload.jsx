import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import TransparentButton from "./transparentBgButton";
import FilledButton from "./filledBgButton";
import Navbar from "../components/navbar";
import SpecialFormHeader from "../components/specialFormHeader";
import ticketOutline from "../assets/ticketOutline.svg";
import ticketBarcode from "../assets/ticketBarcode.svg";

const TicketDownload = () => {
  const navigate = useNavigate();

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  const { reset } = useForm();

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const storedImage = localStorage.getItem("avatarImage");
    if (storedImage) {
      setLoading(true);
      setAvatarUrl(storedImage);
      setLoading(false);
    }
  }, []);

  const onRefresh = () => {
    // reset(formData);
    localStorage.clear();
    console.log(formData);
    navigate("/");
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center">
      {/* special nav for big screens */}
      <Navbar addPosition={true} />

      {/* for mobile, one under nav */}
      <section
        className={`absolute hidden sm:flex md:hidden z-99 justify-center gap-9 text-lg cursor-pointer`}
      >
        <a className="text-white">Events</a>
        <a className="text-[var(--text-color-greyed)]">My Tickets</a>
        <a className="text-[var(--text-color-greyed)]">About Project</a>
      </section>

      <section className="h-auto w-[95%] md:w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-[32px] mx-auto text-white p-[48px]">
        <SpecialFormHeader topic={"Ready"} stepValue={3} />

        {/* ticket section */}
        <section className="flex flex-col gap-[32px] items-center text-center">
          <section>
            <p className="font-alatsi text-[32px]">Your Ticket is Booked! </p>
            <p className="font-roboto-text-regular">
              Check your email for a copy or you can <strong>download</strong>
            </p>
          </section>

          {/* main ticket */}
          {formData ? (
            <section className="relative">
              <img src={ticketOutline} alt="" className="w-full" />

              {/* ticket content */}
              <section className="absolute  inset-0 flex flex-col justify-between">
                <section className="flex flex-col p-[20px] flex-grow">
                  {/* border line */}
                  <section className="border border-[var(--color-light-blue)] h-[90%] sm:h-full flex flex-col justify-between rounded-[16px] p-[14px]">
                    <section>
                      <p className="font-roadrage text-[34px]">
                        Techember Fest &quot;25
                      </p>
                      <p className="font-roboto text-[10px]">
                        📍 04 Rumens Road, Ikoyi, Lagos
                      </p>
                      <p className="font-roboto text-[10px]">
                        📅 March 15, 2025 | 7:00PM
                      </p>
                    </section>

                    {/* avatar image */}
                    {avatarUrl ? (
                      <img
                        src={avatarUrl}
                        alt="Avatar"
                        className="w-[140px] h-[140px] border-4 border-[var(--color-light-blue)] mx-auto rounded-[12px] "
                      ></img>
                    ) : (
                      <p>No avatar uploaded</p>
                    )}
                    {loading && (
                      <p className="mt-4 text-blue-500">Uploading...</p>
                    )}

                    {/* table section */}
                    <section className="w-full bg-[#08343C] flex flex-col justify-center items-center rounded-[8px] border border-[#133D44] h-auto">
                      {/* 1 */}
                      <section className="flex justify-center">
                        {/* a */}
                        <div className="border-r border-b l border-[#12464E] flex flex-col gap-[4px] p-[4px] flex-1">
                          <p className="font-roboto text-[10px] opacity-33">
                            Enter your name
                          </p>
                          <p className="font-roboto text-[12px]">
                            {formData.fullName || "No record"}
                          </p>
                        </div>

                        {/* b */}
                        <div className="border-b  border-[#12464E] flex flex-col flex-1 gap-[4px] p-[4px]">
                          <p className="font-roboto text-[10px] opacity-33">
                            Enter your email
                          </p>
                          <p className="font-roboto text-[12px]">
                            {formData.email || "No record"}
                          </p>
                        </div>
                      </section>

                      {/* 2 */}
                      <section className="flex w-full justify-center">
                        <div className="border-e border-b border-[#12464E] flex flex-col flex-1 gap-[4px] p-[4px]">
                          <p className="font-roboto text-[10px] opacity-33">
                            Ticket Type:
                          </p>
                          <p className="font-roboto text-[12px]">
                            {formData.ticketType || "No record"}
                          </p>
                        </div>
                        <div className="border-b border-[#12464E] flex flex-col flex-1 gap-[4px] p-[4px]">
                          <p className="font-roboto text-[10px] opacity-33">
                            Ticket For:
                          </p>
                          <p className="font-roboto text-[12px]">
                            {formData.numberOfTickets || "No record"}
                          </p>
                        </div>
                      </section>

                      {/* 3 */}
                      <section className=" text-left flex flex-col gap-[4px] p-[4px]">
                        <p className="font-roboto text-[10px] opacity-33">
                          Special Request
                        </p>
                        <p className="font-roboto text-[12px]">Have fun</p>
                      </section>
                    </section>
                  </section>

                  <section className="w-[85%] min-w-[85%] mx-auto mt-auto">
                    <img src={ticketBarcode} alt="w-full" />
                  </section>
                </section>
              </section>
            </section>
          ) : (
            <p>No data for ticket</p>
          )}

          {/* buttons */}
          <section className="w-full gap-[24px] hidden sm:flex ">
            <TransparentButton
              text={"Book Another Ticket"}
              onClick={onRefresh}
            />
            <FilledButton text={"Download Ticket"} onClick={handleSubmit} />
          </section>

          {/* for mobile */}
          <section className="w-full gap-[16px] flex flex-col sm:hidden ">
            <FilledButton text={"Download Ticket"} onClick={handleSubmit} />

            <TransparentButton
              text={"Book Another Ticket"}
              onClick={onRefresh}
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default TicketDownload;
