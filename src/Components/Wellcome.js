import React from "react";


// Se crea una nueva función componente -- Estas también pueden ser clases, 
//pero su método de llamado es diferente
function Wellcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  export default Wellcome;