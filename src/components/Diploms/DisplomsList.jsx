import Diploms from "./Diploms";

function DiplomsList() {
  const diploms = [
    { id: 0,
      year: 2024,
      title: "Bootcamp développement web fullstack",
      school: "Wild Code School",
    },
    {id: 1,
      year: 2019,
      title:
        "Master 2 Science Politique - Ingénierie de Projets en Politiques Urbaines ",
      school: "Université de Lille",
    },
    {id: 2,
      year: 2018,
      title: "Master 2 - Métiers de la Recherche en Science Politique",
      school: "Université de Lille",
    },

    {id: 3,
      year: 2016,
      title: "Licence de Science Politique",
      school: "Université de Lille",
    },
  ];

  return (
    <div className="diploms-section">
    <h3>Études</h3>
   {diploms.map((diplom) => (<Diploms key={diplom.id} diplom={diplom}/>))}
    </div>
  );
}

export default DiplomsList;
