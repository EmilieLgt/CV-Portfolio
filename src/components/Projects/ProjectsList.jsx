import Projects from "./Projects";
import "./projects.css";

function ProjectsList() {
  const projects = [
    {
      id: 0,
      month: "mars 2023",
      title: "Site du groupe 'Samurai'",
      time : "Projet de groupe réalisé en 3 semaines",
      desc:"Site web statique responsive du groupe de musique 'Samurai', de l'univers du jeu vidéo Cyberpunk. Affichage des informations du groupes, possibilité d'écouter des playlists, de tirer les dates de tournées selon les lieux ...",
      tech: ["HTML5", "CSS", "JAVASCRIPT"],
      url: "https://emilielgt.github.io/SiteGroupeSamurai/",
      img: "../../project1.png",
      git :"https://github.com/EmilieLgt/SiteGroupeSamurai.git"
    },
    {
      id: 1,
      month: "avril 2023",
      time : "Projet collectif réalisé en 1 mois",
      desc:"Site d'e-commerce de chaussettes fantaisistes, avec un appel d'API, créée pour l'occasion (génération de contenu via IA). Cahier des charges d'un site e-commerce (possibilité de trier et filtrer les produits, recherche par mot-clé, liste de favoris, code de réduction ...) & charte graphique 'fun'. ",
      title: "Application e-commerce 'feet & fun' ",
      tech: ["REACT", "CSS", "NODE.JS", "API"],
      url: "https://feet-n-fun.vercel.app/",
      img: "../../project2.png",
      git :"https://github.com/WildCodeSchool-2024-02/JS-LILLE-0224-P2-G2-feet-n-fun.git"
    },
    {
      id: 3,
      month: "avril 2023",
      time : "Projet de groupe réalisé en 30h",
      title: "Application 'Lille au vert'",
      desc:"Projet développé pour le Protojam de la Wild Code School sur le thème 'Nature et déconnexion'. Nous sommes parties du fait que nous passions beaucoup (beaucoup) de temps devant nos écrans et avons proposé un catalogue d'activités possibles autour de nous (métropole lilloise) selon notre temps disponible.",
      tech: ["REACT", "CSS", "NODE.JS"],
      url: "https://lille-au-vert.vercel.app/",
      img: "../../project3.png",
      git:"https://github.com/EmilieLgt/Lille-au-vert.git"
    },
  ];

  const soloProjects = [{
    id: 0,
    month: "mai 2023",
    time : "",
    title: "Site de recettes Gluten-free",
    desc:"Site responsive de recettes réalisé avec l'API Edamam (possibilités de filtrer différents régimes alimentaires, types de repas ou ingrédients)",
    tech: ["REACT", "CSS", "NODE.JS"],
    url: "https://gluten-free-recipes-eight.vercel.app/",
    img: "../../project4.png",
    git:"https://github.com/EmilieLgt/gluten-free-recipes"
  },
  {
    id: 1,
    month: "février 2023",
    time : "",
    title: "Valoroulette",
    desc:"Vos parties de Valorant en ranked deviennent insupportables ? Ce site vous aide à vous détendre, en vous permettant de choisir un agent au hasard pour une unranked (qui se passera surement très mal).",
    tech: ["REACT", "CSS"],
    url: "https://valo-roulette.vercel.app/",
    img: "../../project6.png",
    git:"https://github.com/EmilieLgt/ValoRoulette"
  },]
  

  return (<> <div className="projects">
  <h3>Projets collectifs</h3>
  <div className="projects-section">
     
      
      {projects.map((project) => (
        <Projects key={project.id} project={project} />
      ))}
     
    </div>
  
    </div>
    <div className="projects">
    <h3>Projets solos</h3>
    <div className="projects-section">
      {soloProjects.map((project) => (
       
        <Projects key={project.id} project={project} />
      ))}
      </div>
      </div>
      </>
  );
}

export default ProjectsList;
