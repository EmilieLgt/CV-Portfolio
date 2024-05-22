import Experiences from "./Experiences"
import "./experiences.css"
function ExperiencesList () 
{
const experiences = [{
    id:0,
    title : "Doctorante en science politique",
    year : "2019-2023",
    company: "Université de Lille",
    missions : ["Enseignements pour des étudiants de licence de sciences politiques (30h/semestre).", "Participation à la création des programmes et aux discussions pédagogiques",
    "Recherches sur le sport féminin (archives, entretiens, observations)", "Organisation d'évènements scientifiques"]    
},
{ id:1,
    title : "Stage - Chargée de mission évènementiel",
    year : "2019",
    company: "Plateforme des soutiens aux migrant.e.s",
    missions : ["Préparation et organisation d’un Forum consacré à l’hébergement des personnes exilées", "Réalisation d'affiches et de vidéo pour promouvoir les actions de l'association", 
    "Animations d’ateliers et de réunions inter-associatives"]
},
]

return (<div className="section-experiences">
<h3>Expériences passées</h3>
    {experiences.map((experience)=>(
<Experiences  key={experience.id} experience={experience}/>))}
</div>)
}

export default ExperiencesList