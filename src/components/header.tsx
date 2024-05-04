"use client";

import React from "react";
import Link from "next/link";
import { HEADER_NAV, Type } from "@/constants/nav";
import { useActiveLink } from "@/hooks/use-active-link";

interface NavData {
  id: number;
  label: string;
  type: Type;
  href?: string;
}

export const Header = () => {
  const { active, handleActive } = useActiveLink();

  return (
    <header className="flex fixed top-0 left-0 w-full border border-gray-300">
      <nav>
        <ul className="flex gap-5 w-full p-5 py-3">
          {HEADER_NAV.map(({ id, label, type, href }: NavData) => (
            <li key={id} className="relative text-base lg:text-lg">
              {type === "link" && (
                <Link href={href!}>
                  <button
                    className={`text-[1.25rem] font-extralight ${
                      active === href ? "text-violet-700" : ""
                    }`}
                    onClick={handleActive.bind(null, href!)}
                  >
                    {label}
                  </button>
                </Link>
              )}
              {type === "button" && (
                <button
                  className="px-2 py-1 rounded-md bg-violet-500 text-white shadow-md text-[1.25rem] font-extralight"
                  onClick={handleActive.bind(null, label.toLowerCase())}
                >
                  {label}
                </button>
              )}
              {active == href && (
                <div className="absolute mx-3 -inset-x-1/4 -inset-y-[0.75rem] border-b-[3px] border-violet-500" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
