import CompetencesTech from "./CompetencesTech"
import "./competences.css"

function CompetencesList () 
{
/* 
const competencesLanguages = [
    { title: "Anglais",
    level : "courant"

    },
    {title: "Espagnol",
    level : "notions"}
]

const competencesTech = [
    'HTML 5', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 
]
*/ 
return (<div className="competences-section"> <h3>Compétences</h3>
<div className="competences-elements">
<div className="framework-section">
 <h4>Langages & frameworks</h4> 

<CompetencesTech/>
</div>
<div className="competences-langues">
<h4>Langues</h4> 
<strong>Anglais</strong>Courant 
<strong>Espagnol</strong>Notions 


<h4>Soft skills</h4> 
<ul>
    <li>
    Méthodes Agile
    </li>
    <li>
    Capacités d&apos;apprentissage 
    </li>
    <li>
    Aisance avec les outils de création graphique 
    </li>
    <li>
    Travail en équipe   
    </li>
</ul>
</div>


 

</div>


 </div>
 
 )
}
export default CompetencesList