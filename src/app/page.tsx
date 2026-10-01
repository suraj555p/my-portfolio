import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Project from "@/Components/Project";
import Skills from "@/Components/Skills";


export default function Home() {
  return (
    <>
       <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
           <Project />
        </section>

        <section id="about">
          <About />
        </section>

          <section id="contact">
           <Contact/>
        </section>

      </main>
    </>
  );
}
