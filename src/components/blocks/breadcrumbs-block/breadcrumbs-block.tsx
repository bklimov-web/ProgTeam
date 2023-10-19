import React from "react";
import type { FC } from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Props = {
  links: { href: string; title: string }[];
};

export const Breadcrumbs: FC<Props> = ({ links }) => {
  return (
    <nav className="bg-white p-4 flex items-center flex-wrap">
      <ul className="flex items-center mt-6 pl-20">
        <li className="inline-flex items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            <Home />
          </Link>
        </li>

        {!!links.length && <li></li>}

        {links.map((link) => (
          <li className="inline-flex items-center">
            <ChevronRight />
            <Link
              href={link.href}
              className="text-gray-700 hover:text-blue-500"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
