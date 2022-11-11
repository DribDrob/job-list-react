const Button = ({ children }) => {
  return (
    <button
      className="rounded-lg bg-accent py-[18px] px-[30px] font-proxima text-white"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
