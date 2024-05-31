import { motion } from "framer-motion";

import { cn } from "@/utils";
import { headerVariants } from "@/utils/animations";

interface HeaderProps {
  title: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
    <motion.h2
      variants={headerVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "text-3xl md:text-4xl text-slate-800 dark:text-gray-100 font-bold",
        className
      )}
    >
      {title}
    </motion.h2>
  );
};

export default Header;
