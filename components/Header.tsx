interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-800 font-semibold">
      {title}
    </h2>
  );
};

export default Header;
