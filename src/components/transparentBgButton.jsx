const TransparentButton = ({ text }) => {
  return (
    <button className="w-full cursor-pointer text-[var(--color-light-blue)] px-[24px] py-[12px] border border-[var(--color-light-blue)] rounded-[8px] font-main text-[16px] text-center">
      {text}
    </button>
  );
};

export default TransparentButton;
