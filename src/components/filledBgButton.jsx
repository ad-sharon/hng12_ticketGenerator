const FilledButton = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="w-full cursor-pointer px-[24px] py-[12px] bg-[var(--color-light-blue)] rounded-[8px] font-main text-[16px] text-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FilledButton;
