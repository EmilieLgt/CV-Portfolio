import "../App.css";

function Presentation() {
  return (
    <>
      <div className="section-presentation">
        <div>
          <img className="photo-pres" src="../../../photo-cv-rr.png"></img>
        </div>
        <div>
          <h1>Emilie Lingat</h1>
          <h2 className="title-pres">Développeuse Web Junior - Fullstack</h2>
          <p className="desc-pres">
            Ancienne enseignante en science politique,  je me suis reconvertie
            dans le développement web. <br />
            Je recherche actuellement une <strong>entreprise pour une alternance en tant que
            développeuse web fullstack, à Lille et ses environs</strong> 
          </p>
        </div>
      </div>
    </>
  );
}

export default Presentation;
