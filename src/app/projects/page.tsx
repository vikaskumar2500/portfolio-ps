import { Title } from "@/components/title";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectPage() {
  return (
    <section id="projects" className="px-32 py-10 w-full flex flex-col gap-10 items-center justify-center">
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
            <li key={id} className="bg-white flex flex-col gap-3 py-5 flex-grow border-[0.5px] border-gray-300 rounded-[0.3rem] max-w-[40rem] shadow-xl">
              <h3 className="text-[1.4rem] px-10 font-extralight">{title}</h3>
              <p className="text-sm px-10 font-extralight w-full">{description}</p>
              <div className="flex px-10 gap-10">
                <Link
                  href={clone}
                  className="flex items-center border border-gray-500 rounded-md px-3 py-1"
                >
                  <Image
                    src={"/github1.svg"}
                    alt="Github logo"
                    width={25}
                    height={25}
                    priority
                  />
                  <span>Clone Project</span>
                </Link>
                <Link
                  href={repo}
                  className="flex items-center border border-gray-500 rounded-md px-3 py-1"
                >
                  <Image
                    src={"/github1.svg"}
                    alt="Github logo"
                    width={25}
                    height={25}
                    priority
                  />
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
                  <Image
                    src={"/github1.svg"}
                    alt="Github logo"
                    width={25}
                    height={25}
                    priority
                  />
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
