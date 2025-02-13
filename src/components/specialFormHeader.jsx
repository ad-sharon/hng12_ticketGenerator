const SpecialFormHeader = ({ topic, stepValue }) => {
  return (
    <section>
      <section className=" block sm:flex mb-[12px] sm:mb-0 justify-between items-center">
        <p className="text-[32px] font-main">{topic}</p>
        <p className="text-base font-roboto ">Step {stepValue}/3</p>
      </section>

      <section className="flex w-[100%]">
        <div className="w-[604px] sm:w-[232px] border-b-4 rounded-[5px] border-[var(--color-light-blue)]"></div>
        <div className="w-[232px] sm:w-[604px] border-b-4 rounded-[5px] border-[var(--color-tertiary)]"></div>
      </section>
    </section>
  );
};

export default SpecialFormHeader;
