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
    label: "Projects",
    href: "#projects",
    type: Type.link,
  },
  {
    id: 3,
    label: "Resume",
    type: Type.button,
  },
  {
    id: 6,
    label: "Experiences",
    type: Type.link,
    href: "#experiences",
  },
  {
    id: 4,
    label: "About",
    href: "#about",
    type: Type.link,
  },
  {
    id: 5,
    label: "Skills",
    href: "#skills",
    type: Type.link,
  },
];
