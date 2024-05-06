"use client";
import React, { useEffect } from "react";
import { ProjectOverView } from "@/components/leadership/overview";
import { Title } from "@/components/title";
import { useInView } from "react-intersection-observer";
import { useActiveLink } from "@/hooks/use-active-link";

export default function LeaderShip() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { handleActive } = useActiveLink();

  useEffect(() => {
    if (inView) handleActive("#leadership");
  }, [inView, handleActive]);
  return (
    <section
      ref={ref}
      id="leadership"
      className="px-10 md:px-32 py-10 w-full min-h-screen flex pt-20 flex-col gap-10 items-center justify-center"
    >
      <Title title="Leadership" />
      <div className="grid relative grid-cols-1 w-full lg:grid-cols-2 gap-10">
        <div className="col-span-1">
          <p className="text-center md:text-left w-full">
            As a React developer with leadership experience, I bring technical
            expertise, project management skills, and strong communication
            abilities to the table. I have a proven track record of building
            large-scale applications, optimizing code for performance, and
            implementing best practices. Additionally, I have experience leading
            teams and projects, creating and maintaining project plans, managing
            timelines and budgets, and ensuring timely delivery of high-quality
            work. I excel at communicating effectively with team members,
            stakeholders, and clients, both verbally and in writing, and am a
            skilled listener who can provide clear and constructive feedback. I
            am also passionate about mentoring and training other developers to
            help them develop their skills and achieve their goals. With my
            ability to solve complex technical problems and think creatively, I
            am always up-to-date with the latest developments in React and
            related technologies, and am able to innovate and inspire a
            positive, collaborative work environment.
          </p>
        </div>
        <ProjectOverView />
      </div>
    </section>
  );
}
