const FilledButton = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="w-full cursor-pointer px-6 py-3 bg-[var(--color-light-blue)] rounded-lg font-main text-base text-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FilledButton;
