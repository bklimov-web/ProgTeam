"use client";

import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

export type Props = {
  logo: {
    src: string;
    alt: string;
  };
  navLinks: {
    label: string;
    href: string;
  }[];
};

const Header: FC<Props> = ({ logo, navLinks }) => {
  return (
    <div className="relative h-fit bg-slate-300 dark:bg-slate-500-500 py-6 text-slate-800 dark:text-slate-100">
      <div className="container max-w-[1200px] flex justify-between items-center align-middle">
        <Link href="/">
          {logo.src ? (
            <Image src={logo.src} alt={logo.alt} width={20} height={20} />
          ) : (
            logo.alt
          )}
        </Link>

        <ul className="flex flex-row w-auto gap-6 ml-auto">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
