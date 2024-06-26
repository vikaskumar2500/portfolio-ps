'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { Title } from "@/components/title";
import { useActiveLink } from "@/hooks/use-active-link";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { handleActive } = useActiveLink();

  useEffect(() => {
    if (inView) handleActive("#about");
  }, [inView, handleActive]);
  return (
    <section
      ref={ref}
      id="about"
      className="min-h-[60vh] grid pt-20 grid-cols-1 lg:grid-cols-5 items-center justify-between p-10 px-0 md:px-20"
    >
      <div className="relative w-[20rem] h-[20rem] rounded-full hidden lg:col-span-2 lg:flex">
        <Image
          src="/vikas.jpeg"
          className="rounded-full"
          alt="profile picture"
          fill
          sizes="20"
          priority
        />
      </div>
      <div className="lg:col-span-3 flex flex-col items-center justify-center">
        <Title title="About Me" />
        <p className="text-lg font-extralight p-10 font-sans text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          nam velit ipsum earum est eum dolores suscipit excepturi illo tenetur
          temporibus error cumque maxime officia consequatur esse quas
          perspiciatis quisquam asperiores blanditiis! Quis beatae fuga alias
          dignissimos libero nulla ipsum sed unde laborum dolores id, aperiam,
          sit commodi eveniet totam veniam quia atque earum velit explicabo
          esse! Nulla aut distinctio recusandae vitae dolore cupiditate,
          explicabo molestiae laboriosam, rem culpa magni quaerat mollitia
          dolorem eos saepe fugit! Dolorem rem maiores excepturi, delectus quae
          dignissimos ea nulla iusto, vel numquam quod deleniti at iure hic!
          Dolorem quibusdam ab commodi, nostrum consequatur doloribus.
        </p>
        <button
          type="button"
          className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-600 hover:text-gray-100"
        >
          Resume
        </button>
      </div>
    </section>
  );
}
