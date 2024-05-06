export enum Type {
  link = "link",
  button = "button",
}

export const HEADER_NAV = [
  {
    id: 1,
    label: "<Vikas/>",
    href: "#home",
    type: Type.link,
  },
  {
    id: 2,
    label: "About",
    href: "#about",
    type: Type.link,
  },
  {
    id: 6,
    label: "Experiences",
    href: "#experiences",
    type: Type.link,
  },
  {
    id: 3,
    label: "Projects",
    href: "#projects",
    type: Type.link,
  },
  { id: 7, label: "Leadership", href: "#leadership", type: Type.link },
  {
    id: 4,
    label: "Skills",
    href: "#skills",
    type: Type.link,
  },

  {
    id: 5,
    label: "Resume",
    href: "/resume.pdf",
    type: Type.button,
  },
];
