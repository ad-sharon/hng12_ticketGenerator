import { useNavigate } from "react-router-dom";
import TransparentButton from "./transparentBgButton";
import FilledButton from "./filledBgButton";
import Navbar from "../components/navbar";
import ticketOutline from "../assets/ticketOutline.svg";
// import ticketBarcode from "../assets/ticketBarcode.svg";

const TicketDownload = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center">
      <Navbar addPosition={true} />
      <section className="h-auto w-[700px] border border-[var(--color-tertiary)] rounded-[40px] flex flex-col gap-[32px] mx-auto text-white p-[48px]">
        {/* ready header */}
        <section>
          <section className="flex justify-between items-center">
            <p className="text-[32px] font-main">Ready</p>
            <p className="text-base font-roboto">Step 3/3</p>
          </section>
          <section className="flex w-[100%]">
            <div className="w-[232px] border-b-4 rounded-[5px] border-[var(--color-light-blue)]"></div>
            <div className="w-[604px] border-b-4 rounded-[5px] border-[var(--color-tertiary)]"></div>
          </section>
        </section>

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
                  04 Rumens Road, Ikoyi, Lagos
                </p>
                <p className="font-roboto text-[10px]">
                  March 15, 2025 | 7:00PM
                </p>
              </section>
              <img src="" alt="" />

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
