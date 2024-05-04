import { create } from "zustand";

interface ActiveLink {
  active: string;
  handleActive: (active: string) => void;
}

export const useActiveLink = create<ActiveLink>((set) => ({
  active: "#home",
  handleActive: (activeLink) => set(() => ({ active: activeLink })),
}));
