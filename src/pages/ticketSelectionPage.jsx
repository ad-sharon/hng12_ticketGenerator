import Navbar from "../components/navbar";
import TicketSelection from "../components/ticketSelection";
const TicketSelectionPage = () => {
  return (
    <section className="background flex flex-col gap-[46px]">
      <Navbar />
      <TicketSelection />
    </section>
  );
};

export default TicketSelectionPage;
