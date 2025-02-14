const TransparentButton = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      onClick={onClick}
      className="w-full cursor-pointer text-[var(--color-light-blue)] px-6 py-3 border border-[var(--color-light-blue)] rounded-lg font-main text-base text-center"
    >
      {text}
    </button>
  );
};

export default TransparentButton;
