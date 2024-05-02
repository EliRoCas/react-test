// Hooks 
// El useState permite agregar estado a los componentes de función de React, utilizando 2 valores: 
// un estado actual (variable de estado) y una función que lo actualiza.
// La variable de estado puede llevar cualquier nombre, la función debe iniciar con "set" + el nombre que se quiera
// ejemplo: const [count, setCount] = useState() // const [fruit, setFruit] = useState()
// Cuando un estado cambia, React vuelve a renderizar el componente para reflejar los cambios 

// Los hooks utilizan algo llamado "DESESTRUCTURACIÓN DE MATRICES [fruit, setFruit]" 
// Esto significa que se están creando dos nuevas variables fruit y setFruit (para el ejemplo), donde 
// fruit se establece en el primer valor devuelto por el useState y 'setFruit' es el segundo.
import React, { useState } from "react";


// Se define una función componente
const Counter = () => {
    //Dentro de esta, se declara una variable de estado (number) y una función (setNumber) para actualizar ese estado
    // el hook 'useState' inicializa la variable de estado en 0 
    const [number, setNumber] = useState(0);


    // Se define una función 'sum' que se ejecuta cuando se da clic en le botón de "sumando" e incrementa el valor 
    // de 'number' en 1 para cada iteración (cada que se cliquee el botón)
    const sum = () => {
        setNumber(number + 1);
        console.log(number)
    }

    // Se define una función 'subtract' que se ejecuta cuando se da clic en el botón "restando" y decrementa el valor
    const subtract = () => {
        setNumber(number - 1);
        console.log(number)
    }

    return (
        <div>

            <button onClick={subtract}> Restando</button>
            <h2>{number}</h2> {/* Se muestra en pantalla el valor actual de 'number' en cada iteración */}
            <button onClick={sum}> Sumando</button>
        </div>
    )

}

export default Counter; 