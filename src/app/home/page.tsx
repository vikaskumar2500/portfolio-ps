import { SocialMedia } from "@/components/social-media";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center w-full"
    >
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[6rem] text-gray-700 p-0">Vikas Kumar</h1>
          <p className="font-extralight text-lg align-middle">
            Passionate about changing the world with technology
          </p>
        </div>
        <div>
          <SocialMedia />
        </div>
        <Link
          href="#about"
          className="border border-gray-300 px-5 py-2 rounded-md"
          type="button"
        >
          More about me
        </Link>
      </div>
    </section>
  );
}
