"use client";
import React, { useEffect } from "react";
import { EXPERIENCES } from "@/constants/exp";
import Image from "next/image";
import { Title } from "@/components/title";
import { useInView } from "react-intersection-observer";
import { useActiveLink } from "@/hooks/use-active-link";

export default function Experiences() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { handleActive } = useActiveLink();

  useEffect(() => {
    if (inView) handleActive("#experiences");
  }, [inView, handleActive]);
  return (
    <section
      ref={ref}
      id="experiences"
      className="flex pt-20 min-h-[70vh] w-full items-center justify-center flex-col gap-10"
    >
      <Title title="Experiences" />
      <ul className="flex flex-wrap w-full gap-10 items-center justify-center">
        {EXPERIENCES.map(({ id, post, src, time, alt }) => (
          <li
            key={id}
            className="flex w-full md:w-1/3 flex-col items-center justify-center gap-0 md:gap-5"
          >
            <div className="relative w-[15rem] h-[6rem] rounded-md">
              <Image
                src={src}
                sizes="20"
                alt={alt}
                fill
                priority
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col font-sans font-extralight items-center justify-center">
              <span className="text-[1.25rem]">{post}</span>
              <p className="text-[1.25rem]">{time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
