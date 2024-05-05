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
      <div className="fixed top-0 left-0 w-full min-h-screen items-center justify-center z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"/>
      
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
