import Navbar from "../components/navbar";
import About from "../components/about";
const AboutPage = () => {
  return (
    <section className="background flex flex-col gap-[46px]">
      <Navbar />
      <About />
    </section>
  );
};

export default AboutPage;
