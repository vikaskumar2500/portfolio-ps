import { Header } from "@/components/header";
import Image from "next/image";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import Experiences from "./experiences/page";
import ProjectPage from "./projects/page";
import LeaderShip from "./leadership/page";
import Skills from "./skills/page";
import SkillsPage from "./skills/page";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between ">
      <Header />
      <HomePage />
      <AboutPage/>
      <Experiences/>
      <ProjectPage/>
      <LeaderShip/>
      <SkillsPage/>
      <Footer/>
    </main>
  );
}
