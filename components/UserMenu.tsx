import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { MdLogout } from "react-icons/md";

import Button from "./Button";

import { signOut } from "@/app/(auth)/actions";

type UserMenuProps = {
  user: User;
};

const UserMenu = ({ user }: UserMenuProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleContextMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <span
        className="avatar text-xl bg-neutral text-neutral-content rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        onClick={handleContextMenu}
      >
        {user.email?.charAt(0)}
      </span>

      {menuOpen ? (
        <div className="absolute top-10 right-0 min-h-max py-8 bg-gray-100 w-72 rounded-box flex flex-col gap-4">
          <div className="flex gap-2 items-center px-4">
            <span className="avatar text-xl bg-neutral text-neutral-content rounded-full w-10 h-10 flex items-center justify-center">
              {user.email?.charAt(0)}
            </span>
            <span className="text-sm text-slate-600 font-medium">
              {user.email}
            </span>
          </div>

          <form
            action={signOut}
            className="flex items-center hover:bg-slate-500/10 cursor-pointer"
          >
            <Button
              type="submit"
              className="p-0 bg-transparent px-4 w-full justify-start gap-6 text-slate-600 capitalize hover:bg-transparent border-none font-medium outline-none shadow-none"
            >
              <MdLogout size={24} className="text-slate-400" />
              logout
            </Button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default UserMenu;
