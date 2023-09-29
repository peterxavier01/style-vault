"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import useCartSlider from "@/hooks/useCartSlider";
import useLikedSlider from "@/hooks/useLikedSlide";
import useCartData from "@/hooks/useCartData";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaSocks } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";
import { GiPowerRing } from "react-icons/gi";
import { BiSolidShoppingBag, BiCertification } from "react-icons/bi";

const links = [
  { id: 1, name: "Shirts", href: "shirts", icon: IoShirtSharp },
  { id: 2, name: "Socks", href: "socks", icon: FaSocks },
  { id: 3, name: "Accessories", href: "accessories", icon: GiPowerRing },
  { id: 4, name: "Shop All", href: "shop", icon: BiSolidShoppingBag },
  { id: 5, name: "Bestsellers", href: "bestsellers", icon: BiCertification },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavToggle = isOpen ? AiOutlineClose : AiOutlineMenu;

  const pathname = usePathname();

  const cartSlider = useCartSlider();
  const likedSlider = useLikedSlider();
  const { cart } = useCartData();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="shadow-md sticky top-0 z-20 bg-white">
      <div className="navbar justify-between p-4 max-w-[1440px] mx-auto">
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

        <button
          onClick={handleClick}
          className="hidden max-md:block absolute top-7 left-6 z-50 text-near-black"
        >
          <NavToggle size={28} />
        </button>

        <div
          className={`flex justify-center z-30 items-center w-full duration-[400ms] max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:left-[30%] max-md:h-full max-md:bg-white transition ${
            isOpen ? "max-md:translate-x-[0%]" : "max-md:translate-x-[100%]"
          }`}
        >
          <nav className="max-md:w-full max-md:px-6 max-md:pt-20 max-md:h-full">
            <ul className="flex max-md:flex-col max-md:items-start max-md:w-full items-center gap-6 max-md:gap-8">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === `/${link.href}`;

                return (
                  <div
                    key={link.id}
                    className="flex items-center gap-3 text-slate-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="hidden max-md:block">
                      <Icon size={18} />
                    </span>
                    <li
                      className={`text-lg font-medium hover:text-slate-800 border-b-2 hover:border-b-slate-800 transition ${
                        isActive
                          ? "border-b-2 border-b-slate-800 text-slate-800"
                          : "border-b-transparent"
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

        <div className="flex items-center gap-4 md:gap-6">
          <span className="cursor-pointer text-slate-600 hover:text-slate-900 active:scale-90">
            <AiOutlineSearch size={24} />
          </span>
          <span
            className="cursor-pointer relative text-slate-600 hover:text-slate-900 active:scale-90"
            onClick={cartSlider.onOpen}
          >
            <AiOutlineShoppingCart size={24} />
            {cart && (
              <span className="p-[10px] text-[9px] flex items-center justify-center bg-primary w-4 h-4 text-white absolute -top-3 -right-3 rounded-full">
                {cart?.total_items}
              </span>
            )}
          </span>
          <span
            className="cursor-pointer text-slate-600 hover:text-slate-900 active:scale-90"
            onClick={likedSlider.onOpen}
          >
            <AiOutlineHeart size={24} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
