export const Button = ({ text, className, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`gap-2 w-[fit-content] py-[0.8rem] px-2  whitespace-nowrap text-base md:text-lg bg-slate-900 font-bold rounded-md md:py-[0.6875rem] md:px-6 hover:bg-[#ff690d] hover:shadow-md transition-all ease-in ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
