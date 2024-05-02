// Hook 
// Este hook va a tener tres estados: montaje, actualización y desmontaje
import React, { useState, useEffect } from "react";

function Effect() {
    const [count, setCount] = useState(0);
    console.log(count); 

    // Este hook es similar al "componentDiDMount" y al "componentDidUpdate" que se usaba con las clases
    useEffect(() => {
        //Actualizar el título del documento utilizando la API del navegador
        document.title = `Clicked ${count} times`
    });

    return (

        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Sumando
            </button>
        </div>

    )

}




export default Effect; 