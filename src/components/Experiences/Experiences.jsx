/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Experiences ({experience}) {

    return (<>
    <div className="experience-text">
        <p className="experiences-info">{experience.year} | {experience.company}</p>
        <h4 className="experience-title">{experience.title}    </h4>
    </div>


    <ul className="experience-list">{experience.missions.map((exp)=> (<li>{exp}</li>))}
    </ul>
    </>

    )
}

export default Experiences