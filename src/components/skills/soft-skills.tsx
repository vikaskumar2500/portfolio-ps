import { ProgressBar } from "@/ui/progress-bar";
import React from "react";

const SOFTSKILLS = [
  { id: 1, label: "Goal-Oriented", p: 80 },
  { id: 2, label: "Collaboration", p: 90 },
  { id: 3, label: "Positivity", p: 75 },
  { id: 4, label: "Adabptability", p: 85 },
  { id: 5, label: "Problem Solving", p: 90 },
  { id: 6, label: "Empathy", p: 90 },
  { id: 7, label: "Organization", p: 70 },
  { id: 8, label: "Creativity", p: 80 },
];

export const SoftSkills = () => {
  return (
    <ul className="space-y-2 flex flex-wrap w-full items-center justify-center">
      {SOFTSKILLS.map(({ id, label, p }) => (
        <li key={id} className="w-1/2 px-5 py-2 flex flex-col">
          <span className="font-semibold">{label}</span>
          <ProgressBar p={p} />
        </li>
      ))}
    </ul>
  );
};
