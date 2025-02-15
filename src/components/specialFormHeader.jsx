const SpecialFormHeader = ({ topic, stepValue }) => {
  return (
    <section>
      <section className=" block sm:flex mb-3 sm:mb-0 justify-between items-center">
        <p className="text-[32px] font-main">{topic}</p>
        <p className="text-base font-roboto">Step {stepValue}/3</p>
      </section>

      <section className={"flex w-full"}>
        {/* 2 */}
        <div
          className={`${
            stepValue === 2 ? "flex" : "hidden"
          } w-[1200px] sm:w-[700px] border-b-4 rounded-[5px] border-[var(--color-light-blue)]`}
        ></div>

        {/* 1 */}
        <div
          className={`${
            stepValue === 1 ? "flex" : "hidden"
          } w-[1200px] sm:w-[400px] border-b-4 rounded-[5px] border-[var(--color-light-blue)]`}
        ></div>

        {/* 3 */}
        <div
          className={`${
            stepValue === 3 ? "flex" : "hidden"
          } w-[1200px] sm:w-[150px] border-b-4 rounded-[5px] border-[var(--color-light-blue)]`}
        ></div>

        {/* same for all */}
        <div className="w-full border-b-4 rounded-[5px] border-[var(--color-tertiary)]"></div>
      </section>
    </section>
  );
};

export default SpecialFormHeader;
