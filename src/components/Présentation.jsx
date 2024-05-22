import "../App.css";

function Presentation() {
  return (
    <>
      <div className="section-presentation">
        <div>
          <img className="photo-pres" src="../../public/photo-cv-rr.png"></img>
        </div>
        <div>
          <h1>Emilie Lingat</h1>
          <h2 className="title-pres">Développeuse Web Junior - Fullstack</h2>
          <p className="desc-pres">
            Ancienne enseignante en science politique,  je me suis reconvertie
            cette année dans le développement web. <br />
            Je suis actuellement à la recherche d’une <strong>alternance en tant que
            développeuse fullstack, à Lille et ses environs</strong> 
          </p>
        </div>
      </div>
    </>
  );
}

export default Presentation;
