import TicketDownload from "../components/ticketDownload.jsx";
import Navbar from "../components/navbar.jsx";
const TicketDownloadPage = () => {
  return (
    <section className="w-full background flex flex-col gap-[46px]">
      <Navbar />
      <TicketDownload />
    </section>
  );
};

export default TicketDownloadPage;
