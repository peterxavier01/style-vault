import { cn } from "@/utils";

interface HeaderProps {
  title: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl text-slate-800 font-semibold",
        className
      )}
    >
      {title}
    </h2>
  );
};

export default Header;
