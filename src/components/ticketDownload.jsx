import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToPng } from '@hugocxl/react-to-image'
import TransparentButton from "./transparentBgButton";
import FilledButton from "./filledBgButton";
import Navbar from "../components/navbar";
import SpecialFormHeader from "../components/specialFormHeader";
import ticketOutline from "../assets/ticketOutline.svg";
import ticketBarcode from "../assets/ticketBarcode.svg";

const TicketDownload = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [formData, setFormData] = useState(null);

  const [state, convertToPng, ref] = useToPng({
    onSuccess: (dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "Techember_Ticket.png";
      link.click();
    },
    onError: (error) => {
      console.error("Error generating image:", error);
    },
  })

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const storedImage = localStorage.getItem("avatarImage");
    if (storedImage) {
      setAvatarUrl(storedImage);
    }
    setLoading(false);
  }, []);

  const onRefresh = () => {
    localStorage.clear();
    console.log(formData);
    navigate("/");
  };

  const handleSubmit = async () => {
    console.log("Form data:", formData);
    convertToPng();
  };

  return (
    <section className="flex flex-col items-center">
      {/* special nav for big screens */}
      <Navbar addPosition={true} />

      {/* for mobile, one under nav */}
      <section
        className={`absolute hidden top-25 sm:flex md:hidden z-99 justify-between w-[80%] p-1 font-main text-lg cursor-pointer`}
      >
        <a className="text-white" onClick={() => navigate("/")}>
          Events
        </a>
        <a className="text-[var(--text-color-greyed)]">My Tickets</a>
        <a
          className="text-[var(--text-color-greyed)]"
          onClick={() => navigate("/about")}
        >
          About Project
        </a>
      </section>

      <section className="w-[95%] md:w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-8 text-[var(--text-color-light)] p-12">
        <SpecialFormHeader topic={"Ready"} stepValue={3} />

        {/* ticket section */}
        <section className="flex flex-col gap-8 items-center text-center">
          <section>
            <p className="font-alatsi text-[32px]">Your Ticket is Booked! </p>
            <p className="font-roboto text-base">
              Check your email for a copy or you can <strong>download</strong>
            </p>
          </section>

          {/* main ticket part*/}
          {formData ? (
            <section ref={ref} className="relative">
              <img src={ticketOutline} alt="" className="w-full" />

              {/* ticket content */}
              <section className="absolute inset-0 flex flex-col">
                <section className="flex flex-col p-5 flex-grow">
                  <section className="border border-[var(--color-light-blue)] h-full max-h-[80%] flex flex-col justify-between rounded-2xl px-3 pt-0 sm:pt-3 pb-3 ">
                    <section>
                      <p className="font-300 font-roadrage max-h-[50px]">
                        Techember Fest &quot;25
                      </p>
                      <p className="font-roboto text-[10px]">
                        📍 04 Rumens Road, Ikoyi, Lagos
                      </p>
                      <p className="font-roboto text-[10px]">
                        📅 March 15, 2025 | 7:00PM
                      </p>
                    </section>

                    {loading ? (
                      <section>
                        <p>Loading...</p>
                      </section>
                    ) : (
                      (avatarUrl && (
                        <img
                          src={avatarUrl}
                          alt="Avatar"
                          className="w-[110px] sm:w-[120px] md:w-[140px] max-w-[140px] h-[110px] sm:h-[120px] md:h-[140px] max-h-[140px] border-4 border-[var(--color-light-blue)] object-fill mx-auto rounded-xl"
                        />
                      )) ||
                      (!avatarUrl && <p>No avatar uploaded</p>)
                    )}

                    {/* table section */}
                    <section className="w-full max-h-[90%] bg-[var(--color-calm-green)] flex flex-col justify-center items-center rounded-lg border border-[var(--color-nice-green)] ">
                      {/* 1 */}
                      <section className="flex w-full justify-center">
                        <div className="border-r border-b border-[var(--color-bluish-green)] flex flex-col gap-1 p-1 text-left w-full">
                          <p className="font-roboto text-[10px] opacity-33">
                            Enter your name
                          </p>
                          <p className="font-roboto text-xs font-bold">
                            {formData.fullName || "No record"}
                          </p>
                        </div>

                        <div className=" border-b border-[var(--color-bluish-green)] flex flex-col gap-1 p-1 text-left w-full">
                          <p className="font-roboto text-[10px] opacity-33">
                            Enter your email*
                          </p>
                          <p className="font-roboto text-xs w-[90%] sm:w-full truncate">
                            {formData.email || "No record"}
                          </p>
                        </div>
                      </section>

                      {/* 2 */}
                      <section className="flex w-full justify-center">
                        <div className="border-r border-b border-[var(--color-bluish-green)] flex flex-col gap-1 p-1  w-full text-left">
                          <p className="font-roboto text-[10px] opacity-33">
                            Ticket Type:
                          </p>
                          <p className="font-roboto text-xs font-bold">
                            {formData.ticketType || "No record"}
                          </p>
                        </div>

                        <div className=" border-b border-[var(--color-bluish-green)] text-left flex flex-col gap-1 p-1 w-full">
                          <p className="font-roboto text-[10px] opacity-33">
                            Ticket For:
                          </p>
                          <p className="font-roboto text-xs w-full font-bold">
                            {formData.numberOfTickets || "No record"}
                          </p>
                        </div>
                      </section>

                      {/* 3 */}
                      <div className="flex flex-col gap-1 p-1 text-left w-full">
                        <p className="font-roboto text-[10px] opacity-33">
                          Special Request
                        </p>
                        <p className="font-roboto text-xs w-full font-bold truncate">
                          {formData.specialRequest || "No record"}
                        </p>
                      </div>
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
          <section className="w-full gap-6 hidden sm:flex">
            <TransparentButton
              text={"Book Another Ticket"}
              onClick={onRefresh}
            />
            <FilledButton text={"Download Ticket"} onClick={handleSubmit} />
          </section>

          {/* for mobile */}
          <section className="w-full gap-4 flex flex-col sm:hidden ">
            <FilledButton  text={state.isConverting ? "Generating..." : "Download Ticket"} onClick={handleSubmit} />

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
