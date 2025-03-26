import React from "react";
import { useState } from "react";



const Semaforo = () => {
    const [color, setColor] = useState("Rojo");

 const cambioColor = () => { 
    if (color === "Rojo"){ 
        setColor ("Amarillo")
    }
    else if (color === "Amarillo"){
        setColor("Verde")
    }
    else if (color === "Verde"){
        setColor("Rojo")
    }
    console.log(color)
 }
    console.log ({color})
     return (
        <div className="bg-dark text-center">
            <div className="container text-center d-flex flex-column p-5">
            <div className={`luz Rojo ${color==="Rojo"? "activo" : " "}`} 
            onClick={()=>{setColor("Rojo")}}></div>
            <div className={`luz Amarillo ${color==="Amarillo"? "activo" : " "}`}
            onClick={()=>{setColor("Amarillo")}}></div>
            <div className={`luz Verde ${color==="Verde"? "activo" : " "}`}
            onClick={()=>{setColor("Verde")}}></div>
            </div>
            <button className="btn btn-primary"
            onClick={cambioColor}>Cambio luz</button>
        </div>

    );
};


export default Semaforo;