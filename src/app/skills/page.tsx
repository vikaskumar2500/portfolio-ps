import Skills from "@/components/skills";
import { Title } from "@/components/title";
import React from "react";

export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="px-32 py-10 w-full flex flex-col gap-10 items-center justify-center"
    >
      <Title title="Skills" />
      <Skills />
    </section>
  );
}
