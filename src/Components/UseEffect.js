// Hook USEEFFECT 
// Este hook permite llevar a cabo efectos secundarios en componentes funcionales. Existen dos clases: 
// Efectos sin sanamiento: Aquellos que no requieren una acción de limpieza o eliminación de estos (saneamiento), 
// después de que han sido desmontados o actualizados. EJ: Peticiones de red, mutaciones del DOM y registros. 
// Efectos con saneamiento: Aquellos que requieren una acción de limpieza o eliminación de recursos adicionales
// despues de que el componente ha sido desmontado o actualizado. Es decir, después de que se haya actualizado 
// el DOM. De este modo, no se acumula 'basura' que genere fuga de memoria. 
// EJ: suscripciones a eventos, temporizadores, conexiones a DB o peticiones de RED.

// Este hook va a tener tres estados: montaje, actualización y desmontaje

import React, { useState, useEffect } from "react";

// Ejercicio 1 
// function Effect() {
//     const [count, setCount] = useState(0);
//     console.log(count);

//     // Este hook es similar al "componentDiDMount" y al "componentDidUpdate", métodos que se usaban en
//     // el ciclo de vida de React, cuando se tenían clases. 
//     // Se utiliza dentro del componente, para que pueda acceder a la variable de estado, directamente desde el efecto
//     useEffect(() => {
//         //Actualizar el título del documento utilizando la API del navegador document.title
//         document.title = `Clicked ${count} times`
//     });

//     return (

//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Sumando
//             </button>
//         </div>

//     )

// }


// ---------------------------------------------------------------------------------------------------------------

// Ejercicio 2

function Effect() {
    const [text, setText] = useState("");

    // Se define la función componente para que mostre el texto 
    const showText = (e) => {
        setText(e.target.value) // Se utiliza la propiedad "target.value" para que capture los valores del evento
        console.log(text);
    }

    useEffect(() => {
        console.log("montado");
        return () => {
            console.log("desmontado");
        }
    },
        []
    )


    useEffect(() => {
        console.log("Texto modificado");

    },
        [text]
    )

    return (
        <>
            <div>

                <input type="text" onChange={showText} />
                <p>{text}</p>
            </div>

        </>

    );
}

export default Effect; 