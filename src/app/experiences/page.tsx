import React from "react";
import { EXPERIENCES } from "@/constants/exp";
import Image from "next/image";
import { Title } from "@/components/title";

export default function Experiences() {
  return (
    <section id="experiences" className="flex min-h-[70vh] w-full items-center justify-center flex-col gap-10">
      <Title title="Experiences"/>
      <ul className="flex flex-wrap w-full items-center align-middle">
        {EXPERIENCES.map(({ id, post, src, time, alt }) => (
          <li key={id} className="flex py-5 w-1/2 flex-col items-center justify-center gap-5">
            <div className="relative w-[12rem] h-[6rem] rounded-md">
              <Image src={src} alt={alt} fill priority className="rounded-md" />
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
