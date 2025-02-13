import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TransparentButton from "./transparentBgButton";
import FilledButton from "./filledBgButton";
import Navbar from "../components/navbar";
import SpecialFormHeader from "../components/specialFormHeader";
import ticketOutline from "../assets/ticketOutline.svg";
// import ticketBarcode from "../assets/ticketBarcode.svg";

const TicketDownload = () => {
  const navigate = useNavigate();

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedImage = localStorage.getItem("avatarImage");
    if (storedImage) {
      setLoading(true);
      setAvatarUrl(storedImage);
      setLoading(false);
    }
  }, []);

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center">
      <Navbar addPosition={true} />

      <section className="h-auto w-[95%] sm:w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-[32px] mx-auto text-white p-[48px]">
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
          <section className="py-[32px] relative flex flex-col items-center">
            <img src={ticketOutline} alt="" />
            <section className="absolute border border-[var(--color-light-blue)] gap-[20px] flex flex-col rounded-[16px] p-[14px] m-[20px]">
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
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="w-[50%] h-[50%] sm:w-[140px] sm:h-[140px] object-fill border-4 border-[var(--color-light-blue)] mx-auto rounded-[12px] "
                ></img>
              )}
              {loading && <p className="mt-4 text-blue-500">Uploading...</p>}

              <table className="w-full rounded-[24px] border">
                <tbody>
                  <tr>
                    <td className="border-e border-b">
                      <p>Enter your name</p>
                      <p>Avi Chukwu</p>
                    </td>
                    <td className="border-b">
                      <p>Enter your email</p>
                      <p>User@email.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-e border-b">
                      <p>Ticket Type:</p>
                      <p>VIP</p>
                    </td>
                    <td className="border-b">
                      <p>Ticket For:</p>
                      <p>1</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <p>Special Request</p>
                      <p>Have fun</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            {/* <img src={ticketBarcode} alt="" /> */}
          </section>

          {/* navigation buttons */}
          <section className="w-full gap-[24px] flex ">
            <TransparentButton text={"Book Another Ticket"} />

            <FilledButton text={"Download Ticket"} onClick={handleSubmit} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default TicketDownload;
