import { Link, Element } from "react-scroll";
import LandingPage from "./components/LandingPage"
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="bg-gunmetal font-bold">
      {/* Landing Page */}
      <LandingPage/>

      {/* Sticky Nav */}
      <nav className="sticky w-full">
        <Link to="about_me" spy={true} smooth={true} activeClass="text-cherry">
          About Me
        </Link>
      </nav>

      <Element name="about_me">
        <AboutMe/>
      </Element>
    
    </div>
  )
}

export default App
