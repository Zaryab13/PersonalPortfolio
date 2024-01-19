import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between px-14 md:px-24 py-24">
      <Intro />
      <SectionDivider />
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main> 
  );
};
export default Home;