"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Title } from "@/components/title";
import { PROJECTS } from "@/constants/projects";
import { useActiveLink } from "@/hooks/use-active-link";
import { Github } from "@/utils/github";

export default function ProjectPage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { handleActive } = useActiveLink();

  useEffect(() => {
    if (inView) handleActive("#projects");
  }, [inView, handleActive]);

  return (
    <section
      ref={ref}
      id="projects"
      className="px-0 md:px-32 py-10 pt-20 w-full flex flex-col gap-10 items-center justify-center"
    >
      <Title title="Recent Projects" />
      <ul className="w-full flex flex-wrap gap-10 items-center justify-between">
        {PROJECTS.map(
          ({
            clone,
            description,
            github,
            id,
            languages,
            repo,
            title,
            updatedAt,
          }) => (
            <li
              key={id}
              className="bg-white flex flex-col mx-5 gap-3 py-5 flex-grow border-[0.5px] border-gray-300 rounded-[0.3rem] max-w-[40rem] shadow-xl"
            >
              <h3 className="text-[1.4rem] px-10 font-extralight">{title}</h3>
              <p className="text-sm px-10 font-extralight w-full">
                {description}
              </p>
              <div className="flex flex-col md:flex-row px-10 gap-10">
                <Link
                  href={clone}
                  className="flex items-center border border-gray-500 hover:bg-gray-600 hover:text-gray-100 rounded-md px-3 py-1"
                >
                  <Github width={25} height={25} color="#9CA3AF" />
                  <span>Clone Project</span>
                </Link>
                <Link
                  href={repo}
                  className="flex items-center border border-gray-500 rounded-md px-3 py-1 hover:bg-gray-600 hover:text-gray-100"
                >
                  <Github color="#9CA3AF" width={25} height={25} />
                  <span>Repo</span>
                </Link>
              </div>
              <div className="border-b-[0.5px] border-gray-250 w-full" />
              <ul className="w-full px-10 flex flex-wrap items-center gap-2">
                <span className="text-[1rem]">Languages: </span>
                {languages.length > 0 &&
                  languages.map(({ id, label, per }) => (
                    <li
                      key={id}
                      className="flex items-center px-2 py-1 bg-gray-100 font-sans rounded-md text-xs"
                    >
                      <span className="font-semibold">
                        {label} {per} %
                      </span>
                    </li>
                  ))}
                {languages.length === 0 && (
                  <li className="flex items-center px-2 py-1 gap-3 font-sans rounded-md">
                    <span>Code yet to be deployed</span>
                  </li>
                )}
              </ul>
              <div className="flex items-center justify-start gap-10 px-10">
                <Link href={repo} className="flex items-center">
                  <Github width={25} height={25} />
                  <span>Stars</span>
                </Link>
                <span>Updated on {updatedAt}</span>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
