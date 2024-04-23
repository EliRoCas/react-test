// Lo primero que se debe hacer al crear un componente es importar la libreria/framework de React
import React from "react";

// Dado que los componentes son funciones o métodos, su estructura será:

const FooterComp = () => {

    console.log("¡Hola, mundo!")
    return (
        <div>
            <div className="">
                <h1>Este es otro componente</h1>
                <button type="button" className="btn btn-primary"><i className="fa-solid fa-ghost"></i></button>

            </div>
        </div>
    )
}

export default FooterComp; 