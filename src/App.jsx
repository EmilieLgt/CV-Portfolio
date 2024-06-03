import { useState, useEffect, useRef } from "react";
import "./App.css";
import ProjectsList from "./components/Projects/ProjectsList";
import Contact from "./components/Contact";
import Présentation from "./components/Présentation";
import CompetencesList from "./components/Competences/CompentencesList";
import ExperiencesList from "./components/Experiences/ExperiencesList";
import DiplomsList from "./components/Diploms/DisplomsList";

function App() {
  const [selectedSection, setSelectedSection] = useState("presentation");
  const [openMenu, setOpenMenu] = useState(false);
  const sectionRefs = {
    presentation: useRef(null),
    projects: useRef(null),
    competences: useRef(null),
    diploms: useRef(null),
    experiences: useRef(null),
    contact: useRef(null),
  };

  const handleNavClick = (sectionId) => {
    setSelectedSection(sectionId);
    setOpenMenu(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const handleBurgerMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="body-homepage">
      <div className="whole-page">
        <div className="section-nav">
          <a
            href="#presentation"
            onClick={() => handleNavClick("presentation")}
            className={`link-nav`}
          >
            {" "}
            <div
              className={`navBarre-square ${
                selectedSection === "presentation" ? "active" : ""
              }`}
            >
              Présentation
            </div>
          </a>
          <a
            href="#projects"
            onClick={() => handleNavClick("projects")}
            className={`link-nav`}
          >
            <div
              className={`navBarre-square ${
                selectedSection === "projects" ? "active" : ""
              }`}
            >
              Projets
            </div>
          </a>
          <a
            href="#competences"
            onClick={() => handleNavClick("competences")}
            className={`link-nav`}
          >
            <div
              className={`navBarre-square ${
                selectedSection === "competences" ? "active" : ""
              }`}
            >
              Compétences
            </div>
          </a>
          <a
            href="#diploms"
            onClick={() => handleNavClick("diploms")}
            className={`link-nav`}
          >
            <div
              className={`navBarre-square ${
                selectedSection === "diploms" ? "active" : ""
              }`}
            >
              Études
            </div>
          </a>
          <a
            href="#experiences"
            onClick={() => handleNavClick("experiences")}
            className={`link-nav`}
          >
            <div
              className={`navBarre-square ${
                selectedSection === "experiences" ? "active" : ""
              }`}
            >
              Expériences
            </div>
          </a>
          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className={`link-nav`}
          >
            <div
              className={`navBarre-square ${
                selectedSection === "contact" ? "active" : ""
              }`}
            >
              Contact
            </div>
          </a>
        </div>

        <div className="main">
          <div
            id="presentation"
            ref={sectionRefs.presentation}
            className="element"
          >
            <button className="burger-open-button" onClick={handleBurgerMenu}>
              {openMenu ? "X" : "MENU"}
            </button>
            {openMenu && (
              <div className="nav-mobile">
                <a
                  href="#presentation"
                  onClick={() => handleNavClick("presentation")}
                  className={`link-nav`}
                >
                  {" "}
                  <div className="element-nav-barre-mobile">Présentation</div>
                </a>
                <a
                  href="#projects"
                  onClick={() => handleNavClick("projects")}
                  className={`link-nav`}
                >
                  <div className="element-nav-barre-mobile">Projets</div>
                </a>
                <a
                  href="#competences"
                  onClick={() => handleNavClick("competences")}
                  className={`link-nav`}
                >
                  <div className="element-nav-barre-mobile">Compétences</div>
                </a>
                <a
                  href="#diploms"
                  onClick={() => handleNavClick("diploms")}
                  className={`link-nav`}
                >
                  <div className="element-nav-barre-mobile">Études</div>
                </a>
                <a
                  href="#experiences"
                  onClick={() => handleNavClick("experiences")}
                  className={`link-nav`}
                >
                  <div className="element-nav-barre-mobile">Expériences</div>
                </a>
                <a
                  href="#contact"
                  onClick={() => handleNavClick("contact")}
                  className={`link-nav`}
                >
                  <div className="element-nav-barre-mobile">Contact</div>
                </a>
              </div>
            )}
            <Présentation />
          </div>
          <div id="projects" ref={sectionRefs.projects} className="element">
            <ProjectsList />
          </div>
          <div
            id="competences"
            ref={sectionRefs.competences}
            className="element"
          >
            <CompetencesList />
          </div>
          <div id="diploms" ref={sectionRefs.diploms} className="element">
            <DiplomsList />
          </div>
          <div
            id="experiences"
            ref={sectionRefs.experiences}
            className="element"
          >
            <ExperiencesList />
          </div>
          <div id="contact" ref={sectionRefs.contact} className="element">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
