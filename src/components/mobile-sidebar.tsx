"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useActiveLink } from "@/hooks/use-active-link";
import { HEADER_NAV } from "@/constants/nav";
import { NavData } from "./header";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const MobileSideBar = () => {
  const { active, handleActive } = useActiveLink();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild onClick={() => setOpen(true)}>
        <Menu
          size={36}
          color="#4B5563"
          className=" p-1 rounded-md hover:bg-transparent/10"
        />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <ul className="flex flex-col w-full py-3 mt-20 min-h-screen">
          {HEADER_NAV.map(({ id, label, type, href }: NavData) => (
            <li
              key={id}
              className={cn(
                "relative w-full py-1 text-base",
                type === "link" && "hover:bg-gray-100/80",
                active === href && "bg-violet-100"
              )}
            >
              {type === "link" && (
                <Link
                  href={href!}
                  className="w-full h-full py-2 flex items-start"
                >
                  <button
                    className={cn(
                      "text-[1.25rem] w-full text-start px-10 font-extralight outline-none",
                      active === href ? "text-violet-700" : ""
                    )}
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
                  className={cn(
                    "text-[1.25rem] text-start text-lg font-semibold px-10 outline-none border border-gray-300 w-full py-[0.5rem] rounded-md hover:bg-gray-600 hover:text-gray-100 shadow-sm"
                  )}
                >
                  {label}
                </Link>
              )}
              {active == href && (
                <div className="absolute top-0 h-full left-0 w-1 border-l-4  border-violet-500" />
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
