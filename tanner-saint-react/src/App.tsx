import { Link, Element } from "react-scroll";
import LandingPage from "./components/LandingPage"
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gunmetal font-bold">
      {/* Landing Page */}
      <LandingPage/>

      {/* Sticky Nav */}
      <nav className="flex justify-center gap-8 bg-blue text-aquatic sticky top-0 p-4">
        <Link to="about_me" spy={true} smooth={true} offset={-30} activeClass="text-cyan">
          About Me
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={-30} activeClass="text-cyan">
          Projects
        </Link>
        <Link to="contact_me" spy={true} smooth={true} offset={-30} activeClass="text-cyan">
          Contact Me
        </Link>
      </nav>

      <Element id="about_me" name="about_me">
        <AboutMe/>
      </Element>

      <Element id="projects" name="projects">
        <Projects/>
      </Element>
    
    </div>
  )
}

export default App
