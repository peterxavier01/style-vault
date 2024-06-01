import { AiOutlineCloseCircle } from "react-icons/ai";

import useCartSlider from "@/hooks/useCartSlider";

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
  const onClose = useCartSlider((state) => state.onClose);

  return (
    <>
      {isOpen ? ( // Show ovelay if slider is open
        <div
          className="w-full fixed inset-0 h-full min-h-screen bg-black/20 z-[100]"
          onClick={onClose}
        />
      ) : null}
      <div
        className={cn(
          "fixed right-0 inset-y-0 h-full min-h-screen w-[80%] md:w-[25rem] bg-white dark:bg-dark-secondary z-[200] px-4 duration-[300ms] transition overflow-y-scroll",
          className,
          {
            "translate-x-[0%]": isOpen,
            "translate-x-[100%]": !isOpen,
          }
        )}
      >
        <div className="flex sticky bg-white dark:bg-dark-secondary z-30 pt-8 top-0 items-center justify-between border-b border-b-slate-300 w-full pb-2">
          <p className="text-lg font-medium text-slate-800 dark:text-gray-300">{title}</p>
          <span className="cursor-pointer" onClick={onClick}>
            <AiOutlineCloseCircle size={26} className="text-slate-800 dark:text-gray-300" />
          </span>
        </div>
        {children}
      </div>
    </>
  );
};

export default Slider;
