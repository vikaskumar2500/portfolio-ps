"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { SocialMedia } from "@/components/social-media";
import { Description } from "@/components/home/description";
import { useInView } from "react-intersection-observer";
import { useActiveLink } from "@/hooks/use-active-link";

export default function HomePage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { handleActive } = useActiveLink();

  useEffect(() => {
    if (inView) handleActive("#home");
  }, [inView, handleActive]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen bg-sky-300 flex items-center justify-center w-full"
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className=" text-[3rem] md:text-[6rem] text-gray-700 p-0 font-sans">
            Vikas Kumar
          </h1>
          <Description />
        </div>
        <SocialMedia />
        <Link
          href="#about"
          className="border border-white px-5 py-2 rounded-md hover:bg-white hover:bg-none"
          type="button"
        >
          More about me
        </Link>
      </div>
    </section>
  );
}
