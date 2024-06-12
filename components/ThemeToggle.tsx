import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { LuSunMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const Icon =
    theme === "dark" ? FiMoon : theme === "light" ? FiSun : LuSunMoon;

  return (
    <div className="dropdown dropdown-end dropdown-bottom">
      <div tabIndex={0} role="button">
        <Icon className="text-slate-800 dark:text-gray-300" size={24} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-white text-slate-800 dark:bg-dark-secondary dark:text-gray-300 rounded-box w-52"
      >
        <li onClick={() => setTheme("light")}>
          <a>Light</a>
        </li>
        <li onClick={() => setTheme("dark")}>
          <a>Dark</a>
        </li>
        <li onClick={() => setTheme("system")}>
          <a>System</a>
        </li>
      </ul>
    </div>
  );
};

export default ThemeToggle;
