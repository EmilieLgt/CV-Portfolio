/* eslint-disable react/prop-types */
import "./projects.css";

function Project({ project }) {
  return (
    <div className="one-project">
      <h4 className="projects-title">{project.title}</h4>
        <img src={project.img} />
  
    
        
            <p>{project.desc}</p>
            <ul className="project-list-competences">
              {project.tech.map((proj) => (
                <li className="project-competences" key={proj}>
                  {proj}
                </li>
              ))}
            </ul>
<div className="buttons-project">
          <button>
            <a href={project.git} target="blank">
              {" "}
              Github
            </a>{" "}
          </button>
          <button>
            <a href={project.url} target="blank">
              {" "}
              Découvrir
            </a>
          </button>
          </div>
    </div>
  );
}

export default Project;
