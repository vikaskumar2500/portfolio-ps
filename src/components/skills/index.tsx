"use client";
import React, { useState } from "react";
import { TechnicalSkills } from "./technical-skills";
import { SoftSkills } from "./soft-skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 w-full">
        <button
          type="button"
          onClick={() => setActiveButton(0)}
          className={cn(
            "border w-full text-blue-500 border-gray-500  px-5 py-2 rounded-t-md col-span-1",
            activeButton === 0 && "border-b-0 text-gray-700",
            activeButton === 1 &&
              "border-t-0 border-l-0 border-r-0 md:hover:border-[0.1px] hover:border-t-gray-200 hover:border-l-gray-200"
          )}
        >
          Technical Skills
        </button>
        <button
          type="button"
          onClick={() => setActiveButton(1)}
          className={cn(
            "border border-gray-500 text-blue-500 px-5 py-2 rounded-t-md col-span-1",
            activeButton === 1 && "border-b-0 text-gray-700 ",
            activeButton === 0 &&
              "border-t-0 border-l-0 border-r-0 md:hover:border-[0.1px] hover:border-t-gray-200 hover:border-r-gray-200"
          )}
        >
          Soft Skills
        </button>
      </div>
      {activeButton === 0 && <TechnicalSkills />}
      {activeButton === 1 && <SoftSkills />}
    </div>
  );
}
