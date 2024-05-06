"use client";
import React, { useEffect } from "react";
import Skills from "@/components/skills";
import { Title } from "@/components/title";
import { useInView } from "react-intersection-observer";
import { useActiveLink } from "@/hooks/use-active-link";

export default function SkillsPage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { handleActive } = useActiveLink();

  useEffect(() => {
    if (inView) handleActive("#skills");
  }, [inView, handleActive]);

  return (
    <section
      ref={ref}
      id="skills"
      className="px-5 md:px-32 py-20 w-full pt-20 flex flex-col gap-10 items-center justify-center"
    >
      <Title title="Skills" />
      <Skills />
    </section>
  );
}
