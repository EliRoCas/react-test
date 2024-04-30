
import './App.css';
// import FooterComp from './Components/CompFooter';
// import LoginButton from './Components/LoginButton';
// import LogoutButton from './Components/LogoutButton';
// import Profile from './Profile';
// import Wellcome from './Components/Wellcome';
import Person from './Components/Person';
import Count from './Components/CountComp';

function App() {


  // const name = "Ingeniero"; // Esto es JS normal
  // const age = 32;
  // const email = "ea9089@hotmail.com";
  // const res = <div>{name} {age} {email} </div>


  return ( // Aquí se usa JSX
    <div className="app">
      {/* Utilizando Bootstrap  */}
      {/* <h1>¡Hola, mundo!</h1>
      <button type='button' className='btn btn-success'><i className="fa-brands fa-android"></i></button>
     

      // Utilizando componentes creados por el usuario
     <FooterComp /> */}


      {/* Utilizando componentes de Auth0 */}
      {/* <LoginButton />
      <LogoutButton></LogoutButton>
      <Profile></Profile> */}

      {/* Utilizando funciones componentes */}
      {/* <Wellcome name="Dante" />
      <Wellcome name="Triz" />
      <Wellcome name="Edw" /> */}

      {/* Utilizando variables, estas se llaman en corchetes porque es JSX */}
      {/* <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
      <h2>{res}</h2> */}

      {/* Utilizando props */}
      <h2>Ejercicio 1 utilizando props</h2>
      <Person nombre="Dante Arias" edad="3 años" correo="dante@gmail.com" />
      <Person nombre="Triz Arias" edad="2 años" correo="triz@gmail.com" />
      <Person nombre="Edwin Arias" edad="34 años" correo="ea@gmail.com" />


      <Count />

    </div>
  );
}



export default App;
