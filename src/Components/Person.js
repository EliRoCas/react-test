import React from "react";


// Sólo funciona para una persona. 
// function Person() {
//     return (
//         <div className="person">
//             <h2>Nombre: Dante Arias</h2>
//             <p>Edad: 3 años</p>
//             <p>Correo: dante@gmail.com</p>
//         </div>
//     )
// }

// Funciona para para varias personas, se utiliza para agregar la información como atributos en la etiqueta HTML
function Person(props) {
    // Se imprimen por consola los datos del objeto guardado en los "props"
    console.log(props);
    return (
        <div className="person">
            {/* se definen los datos, atributos, que tendrán los props  */}
            <h5>Nombre:{props.nombre} </h5>
            <p>Edad:{props.edad} </p>
            <p>Correo:{props.correo}</p>
        </div>
    )
}

export default Person; 