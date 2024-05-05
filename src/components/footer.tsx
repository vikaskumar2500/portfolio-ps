import React from "react";
import { Title } from "./title";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 px-40 py-20 gap-5 w-full flex items-center justify-center flex-col">
      <Title title="Get In Touch" />

      <div className="flex items-center justify-center flex-col">
        <p className="text-center max-w-full">
          I'm currently looking for full-time React Developer/Frontend Developer
          opportunities! If you know of any positions available, if you have any
          questions, or if you just want to say hi, please feel free to email me
          at,
        </p>
        <Link
          href="mailto:vikas.nits8084@gmail.com"
          className="text-center underline text-blue-500"
        >
          vikas.nits8084@gmail.com
        </Link>
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-center gap-1 flex flex-row items-center justify-center w-full">
          <span className="font-bold">{"</>"}</span> with 💙 by
          <Link href={"https://github.com/vikaskumar2500"} className="px-2 rounded-md bg-gray-600 text-white">Vikas Kumar</Link>
          using
          <Image
            src={"/reactjslogo.svg"}
            alt="React js logo"
            width={15}
            height={15}
            priority
          />
        </p>
      </div>
    </footer>
  );
};
