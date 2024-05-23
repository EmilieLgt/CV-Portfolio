import "./App.css";
import ProjectsList from "./components/Projects/ProjectsList";
import Contact from "./components/Contact";
import Présentation from "./components/Présentation";
import CompetencesList from "./components/Competences/CompentencesList";
import ExperiencesList from "./components/Experiences/ExperiencesList";
import DiplomsList from "./components/Diploms/DisplomsList";

function App() {
  return (
    <div className="whole-page">
      <div className="section-nav">
        <a href="#presentation" offset={-70} duration={500} className="link-nav">
          <div className="navBarre-square">Intro</div>
        </a>
        <a href="#my-projects" offset={-70} duration={500} className="link-nav">
          <div className="navBarre-square">Projets</div>
        </a>
        <a href="#competences" offset={-70} duration={500} className="link-nav">
          <div className="navBarre-square">Compétences</div>{" "}
        </a>
        <a href="#diploms" offset={-70} duration={500} className="link-nav">
          <div className="navBarre-square">Études</div>{" "}
        </a>
        <a href="#experiences" offset={-70} duration={500} className="link-nav">
          {" "}
          <div className="navBarre-square">Expériences</div>{" "}
        </a>
        <a href="#contact" offset={-70} duration={500} className="link-nav">
          <div className="navBarre-square">Contact</div>
        </a>
      </div>
      <div className="main">
        <div id="presentation" className="element">
          <Présentation />
        </div>
        <div id="my-projects" className="element">
          <ProjectsList />
        </div>
        <div id="competences" className="element">
          <CompetencesList />
        </div>
        <div id="diploms" className="element">
          <DiplomsList />
        </div>
        <div id="experiences" className="element">
          <ExperiencesList />
        </div>
        <div id="contact" className="element">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
