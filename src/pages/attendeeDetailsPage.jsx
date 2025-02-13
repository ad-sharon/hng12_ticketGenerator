import AttendeeDetails from "../components/attendeeDetails";
import Navbar from "../components/navbar";

const AttendeeDetailsPage = () => {
  return (
    <section className="background flex flex-col gap-[46px]">
      <Navbar />
      <AttendeeDetails />
    </section>
  );
};

export default AttendeeDetailsPage;
