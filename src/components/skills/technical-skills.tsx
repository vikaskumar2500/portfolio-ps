import { ProgressBar } from "@/components/ui/progress-bar";
import React from "react";

const TECHNICALSKILLS = [
  { id: 1, label: "React", per: 90 },
  { id: 2, label: "JavaScript", per: 90 },
  { id: 3, label: "Data Structures", per: 70 },
  { id: 4, label: "HTML/CSS", per: 50 },
  { id: 5, label: "Typescript", per: 90 },
  { id: 6, label: "SQL", per: 60 },
];

export const TechnicalSkills = () => {
  return (
    <ul className="space-y-2 flex flex-wrap w-full items-center justify-center">
      {TECHNICALSKILLS.map(({ id, label, per }) => (
        <li key={id} className="w-full md:w-1/2 px-5 py-2 flex flex-col">
          <span className="font-semibold">{label}</span>
          <ProgressBar p={per} />
        </li>
      ))}
    </ul>
  );
};
