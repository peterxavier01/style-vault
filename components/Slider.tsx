import { AiOutlineCloseCircle } from "react-icons/ai";

import { cn } from "@/utils";

interface SliderProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  title,
  children,
  onClick,
  isOpen,
  className,
}) => {
  return (
    <div
      className={cn(
        "fixed right-0 inset-y-0 h-full min-h-screen w-[80%] md:w-[25rem] bg-white z-[200] py-12 px-4 duration-[300ms] transition overflow-y-scroll",
        className,
        {
          "translate-x-[0%]": isOpen,
          "translate-x-[100%]": !isOpen,
        }
      )}
    >
      <div className="flex items-center justify-between border-b border-b-slate-300 w-full pb-2">
        <p className="text-lg font-medium text-slate-800">{title}</p>
        <span className="cursor-pointer" onClick={onClick}>
          <AiOutlineCloseCircle size={26} />
        </span>
      </div>
      {children}
    </div>
  );
};

export default Slider;
