import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Certifications from "../components/Certifications";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
