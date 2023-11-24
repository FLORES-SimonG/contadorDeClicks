import React from "react";
import '../hojas_de_estilos/Contador.css'
function Contador ({ numClicks }){
  return(
    <div className="contador">
      {numClicks}

    </div>
  )

}

export default Contador;