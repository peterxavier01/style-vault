"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import useCartSlider from "@/hooks/useCartSlider";
import useCartData from "@/hooks/useCartData";
import getCart from "@/libs/getCart";

import clientOnly from "./ClientOnly";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiFillHome,
} from "react-icons/ai";
import { FaFemale, FaMale } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import useCheckoutData from "@/hooks/useCheckoutData";

const links = [
  { id: 1, name: "Home", href: "/", icon: AiFillHome },
  { id: 2, name: "Men", href: "/category/men", icon: FaMale },
  { id: 3, name: "Women", href: "/category/women", icon: FaFemale },
  { id: 5, name: "Shop All", href: "/shop", icon: BiSolidShoppingBag },
];

const Navbar = () => {
  const { cart, setCart } = useCartData();
  const isOrderConfirmed = useCheckoutData((state) => state.isOrderConfirmed);
  const { theme } = useTheme();

  useEffect(() => {
    const getCartData = async () => {
      if (isOrderConfirmed) {
        setCart(null);
      }

      if (!isOrderConfirmed) {
        try {
          const data = await getCart();
          setCart(data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    getCartData();
  }, [setCart, cart, isOrderConfirmed]);

  const [isOpen, setIsOpen] = useState(false);
  const NavToggle = isOpen ? AiOutlineClose : AiOutlineMenu;

  const pathname = usePathname();

  const cartSlider = useCartSlider();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-primary">
      <div className="navbar justify-between py-4 px-12 max-md:px-4 max-w-[1440px] mx-auto">
        <div className="max-md:mx-auto">
          <Link href="/">
            <Image
              src={theme === "light" ? "/logo-dark.png" : "/logo-light.png"}
              alt="style vault logo"
              width={100}
              height={100}
              className="w-auto md:w-[150px] h-auto"
            />
          </Link>
        </div>

        <div
          className={`flex justify-start z-30 items-center w-max max-md:w-full duration-[400ms] max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:left-[30%] max-md:h-full max-md:bg-white max-md:dark:bg-dark-secondary transition ${
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
                    className="flex items-center gap-3 text-slate-600 dark:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="hidden max-md:block">
                      <Icon
                        size={22}
                        className={
                          isActive
                            ? "text-main-black dark:text-white"
                            : "text-slate-500"
                        }
                      />
                    </div>
                    <li
                      className={`text-lg md:text-base hover:text-main-black hover:dark:text-white transition ${
                        isActive
                          ? "text-main-black dark:text-white font-bold"
                          : "text-slate-500 dark:text-gray-300 font-medium"
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
          className="hidden max-md:block absolute top-7 left-6 z-50"
        >
          <NavToggle size={28} className="text-slate-800 dark:text-gray-300" />
        </button>

        <div className="flex items-center gap-4 md:gap-6">
          <Search />

          <div
            className="cursor-pointer relative text-slate-600 dark:text-gray-300 hover:text-slate-900 hover:dark:text-white active:scale-90"
            onClick={cartSlider.onOpen}
          >
            <AiOutlineShoppingCart size={24} />
            {cart && (
              <span className="p-[10px] text-[9px] flex items-center justify-center bg-primary w-4 h-4 text-white absolute -top-3 -right-3 rounded-full">
                {cart?.total_items}
              </span>
            )}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default clientOnly(Navbar);
