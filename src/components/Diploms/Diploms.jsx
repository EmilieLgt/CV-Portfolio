/* eslint-disable react/prop-types */
import "./diploms.css"

function Diploms ({diplom}) {


    return (
        <div className="diploms">
<p className="diploms-info">{diplom.year}  |  {diplom.school}</p>
        <h4 className="diploms-title">   {diplom.title}</h4>
            
        </div>
    )
}

export default Diploms