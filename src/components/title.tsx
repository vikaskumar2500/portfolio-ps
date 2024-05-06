import React from "react";

interface TitleProps {
  className?: string;
  title: string;
}

export const Title = ({ className, title }: TitleProps) => {
  return (
    <h2 className={`text-[2.5rem] md:text-[3.5rem] font-sans font-extralight ${className}`}>
      {title}
    </h2>
  );
};
