"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";

import useCartSlider from "@/hooks/useCartSlider";
import useLikedSlider from "@/hooks/useLikedSlide";
import useCartData from "@/hooks/useCartData";
import getCart from "@/libs/getCart";
import { createClient } from "@/utils/supabase/client";

import clientOnly from "./ClientOnly";
import Button from "./Button";
import UserMenu from "./UserMenu";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiFillHome,
} from "react-icons/ai";
import { FaChild, FaFemale, FaMale } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";

const links = [
  { id: 1, name: "Home", href: "/", icon: AiFillHome },
  { id: 2, name: "Men", href: "/category/men", icon: FaMale },
  { id: 3, name: "Women", href: "/category/women", icon: FaFemale },
  { id: 4, name: "Kids", href: "/category/kids", icon: FaChild },
  { id: 5, name: "Shop All", href: "/shop", icon: BiSolidShoppingBag },
];

interface NavbarProps {
  data: {
    user: User | null;
  };
}

const Navbar = ({ data }: NavbarProps) => {
  const { cart, setCart } = useCartData();

  const user = data?.user;

  // const supabase = createClient();
  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //   supabase.auth
  //     .getSession()
  //     .then(({ data: { session } }) => setSession(session));

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });

  //   return () => subscription.unsubscribe();
  // }, [supabase]);

  useEffect(() => {
    getCart()
      .then((cart) => {
        setCart(cart);
      })
      .catch((err) => console.log(err));
  }, [setCart]);

  const [isOpen, setIsOpen] = useState(false);
  const NavToggle = isOpen ? AiOutlineClose : AiOutlineMenu;

  const pathname = usePathname();

  const cartSlider = useCartSlider();
  const likedSlider = useLikedSlider();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="navbar justify-between py-4 px-12 max-md:px-4 max-w-[1440px] mx-auto">
        <div className="max-md:mx-auto">
          <Link href="/">
            <Image
              src="/logo-dark.png"
              alt="style vault logo"
              width={100}
              height={100}
              className="w-auto md:w-[150px] h-auto"
            />
          </Link>
        </div>

        <div
          className={`flex justify-start z-30 items-center w-max max-md:w-full duration-[400ms] max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:left-[30%] max-md:h-full max-md:bg-white transition ${
            isOpen ? "max-md:translate-x-[0%]" : "max-md:translate-x-[100%]"
          }`}
        >
          <nav className="max-md:w-full max-md:px-6 max-md:pt-20 max-md:h-full">
            <ul className="flex max-md:flex-col max-md:items-start max-md:w-full items-center gap-6 lg:gap-10 max-md:gap-8">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === `${link.href}`;

                return (
                  <div
                    key={link.id}
                    className="flex items-center gap-3 text-slate-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="hidden max-md:block">
                      <Icon size={18} />
                    </div>
                    <li
                      className={`text-base hover:text-main-black transition ${
                        isActive
                          ? "text-main-black font-bold"
                          : "text-slate-500 font-medium"
                      }`}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>

        <button
          onClick={handleClick}
          className="hidden max-md:block absolute top-7 left-6 z-50 text-near-black"
        >
          <NavToggle size={28} />
        </button>

        <div className="flex items-center gap-4 md:gap-6">
          <span className="cursor-pointer text-slate-600 hover:text-slate-900 active:scale-90">
            <AiOutlineSearch size={24} />
          </span>
          <div
            className="cursor-pointer relative text-slate-600 hover:text-slate-900 active:scale-90"
            onClick={cartSlider.onOpen}
          >
            <AiOutlineShoppingCart size={24} />
            {cart && (
              <span className="p-[10px] text-[9px] flex items-center justify-center bg-primary w-4 h-4 text-white absolute -top-3 -right-3 rounded-full">
                {cart?.total_items}
              </span>
            )}
          </div>

          <span
            className="cursor-pointer text-slate-600 hover:text-slate-900 active:scale-90"
            onClick={likedSlider.onOpen}
          >
            <AiOutlineHeart size={24} />
          </span>

          {user ? (
            <UserMenu user={user} />
          ) : (
            <Button>
              <Link href="/login">Sign in</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default clientOnly(Navbar);
