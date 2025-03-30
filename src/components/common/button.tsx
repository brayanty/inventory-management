import React from "react";

const Button = ({
  className,
  onClick,
  children,
}: {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500  before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-400 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl font-semibold text-amber-50 group} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
