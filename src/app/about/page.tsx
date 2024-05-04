import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-[60vh] grid  grid-cols-5 items-center justify-between p-10 px-20"
    >
      <div className="relative w-[20rem] h-[20rem] rounded-full col-span-2 ">
        <div></div>
        <Image
          src="/vikas.jpeg"
          className="rounded-full"
          objectFit="contents"
          objectPosition="cover"
          alt="profile picture"
          fill
          priority
        />
      </div>
      <div className="col-span-3 flex flex-col items-center justify-center">
        <h2 className="text-[3.5rem]">About Me</h2>
        <p className="text-lg font-extralight p-10 font-sans">
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
        <button type="button" className="px-5 py-2 rounded-md border border-gray-300">
          Resume
        </button>
      </div>
    </section>
  );
}
