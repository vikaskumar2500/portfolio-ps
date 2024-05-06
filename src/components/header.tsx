"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HEADER_NAV, Type } from "@/constants/nav";
import { useActiveLink } from "@/hooks/use-active-link";
import { cn } from "@/lib/utils";
import { MobileSideBar } from "./mobile-sidebar";

export interface NavData {
  id: number;
  label: string;
  type: Type;
  href?: string;
}

export const Header = () => {
  const { active, handleActive } = useActiveLink();

  return (
    <header className="flex fixed top-0 left-0 w-full border bg-gray-200/80 z-20 border-gray-300">
      <nav className=" hidden md:flex">
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
                <Link
                  href={href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="border-[0.5px] border-gray-400 px-3 py-1 rounded-md hover:bg-gray-600 hover:text-gray-100 shadow-sm"
                >
                  Resume
                </Link>
              )}
              {active == href && (
                <div className="absolute mx-3 -inset-x-1/4 -inset-y-[0.75rem] border-b-[3px] border-violet-500" />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="flex items-center justify-between px-10 w-full md:hidden">
        <div className="relative text-base lg:text-lg">
          <Link href={"#home"}>
            <button className={cn("text-[1.25rem] font-extralight")}>
              {"<Vikas/>"}
            </button>
          </Link>
        </div>
        <MobileSideBar />
      </nav>
    </header>
  );
};
