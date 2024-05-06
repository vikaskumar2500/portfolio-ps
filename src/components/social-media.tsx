"use client";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SOCIAL_MEDIA = [
  {
    id: 1,
    label: "Github",
    href: "https://github.com/vikaskumar2500",
    src: "/github.svg",
    alt: "Github logo",
  },
  {
    id: 2,
    label: "Facebook",
    href: "https://www.facebook.com/vikaskumar0205",
    src: "/facebook.svg",
    alt: "Facebook logo",
  },
  {
    id: 3,
    label: "Instagram",
    href: "https://www.instagram.com/vikaskumar_0205",
    src: "/instagram.svg",
    alt: "Instagram logo",
  },
  {
    id: 4,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/vikas-kumar25",
    src: "/linkedin.svg",
    alt: "Linkedin logo",
  },
];

export const SocialMedia = () => {
  return (
    <ul className="flex gap-3">
      {SOCIAL_MEDIA.map(({ id, href, alt, label, src }) => (
        <Link key={id} className="relative hover:text-black" title={label} href={href} target="_blank">
          <Image src={src} style={{width:"auto", height:"auto"}} color="blue" alt={alt} className="bg-gray-200 rounded-sm" width={36} height={20} priority />
        </Link>
      ))}
    </ul>
  );
};
