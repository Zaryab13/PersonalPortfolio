import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between px-24 py-24">
      <Intro />
      <SectionDivider />
      <About/>
      <Projects/>
    </main> 
  );
};
export default Home;
