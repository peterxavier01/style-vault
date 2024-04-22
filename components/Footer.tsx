import Image from "next/image";
import Link from "next/link";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const icons = [
  { id: 1, icon: AiFillFacebook },
  { id: 2, icon: AiFillInstagram },
  { id: 3, icon: AiFillTwitterCircle },
  { id: 4, icon: AiFillYoutube },
];

const shopLinks = [
  { id: 1, title: "All Products" },
  { id: 2, title: "Ties" },
  { id: 3, title: "Socks" },
  { id: 4, title: "Cufflinks" },
  { id: 5, title: "Shirts" },
];

const helpLinks = [
  { id: 1, title: "Refund Policy" },
  { id: 2, title: "Privacy Policy" },
  { id: 3, title: "Wear and Care FAQ" },
  { id: 4, title: "Shipping Information" },
];

const aboutLinks = [
  { id: 1, title: "Our Values" },
  { id: 2, title: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="bg-[#040308] py-8 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <aside className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo-light.png"
                alt="style vault logo"
                width={140}
                height={100}
                className="w-[130px] md:w-[180px] h-auto"
              />
            </Link>
            <p className="text-white text-base">
              Everything you need, all in one place. Just for you
            </p>
            <div className="flex items-center gap-4">
              {icons.map((icon) => {
                const Icon = icon.icon;
                return (
                  <span
                    key={icon.id}
                    className="text-white hover:scale-125 hover:rotate-[360deg] duration-500 transition cursor-pointer"
                  >
                    <Icon size={25} />
                  </span>
                );
              })}
            </div>
          </aside>
          <nav>
            <header className="text-white footer-title opacity-80 text-xl leading-[50px]">
              Our shop
            </header>
            <ul>
              {shopLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-slate-400 text-[14px] leading-[30px]"
                >
                  <Link href="#">{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <header className="text-white footer-title opacity-80 text-xl leading-[50px]">
              Help
            </header>
            <ul>
              {helpLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-slate-400 text-[14px] leading-[30px]"
                >
                  <Link href="#">{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <header className="text-white footer-title opacity-80 text-xl leading-[50px]">
              About Us
            </header>
            <ul>
              {aboutLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-slate-400 text-[14px] leading-[30px]"
                >
                  <Link href="#">{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-b border-slate-400 w-full mb-8" />

        <aside className="text-slate-400 text-xs flex justify-center items-center">
          &copy; 2023 Style Vault
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
