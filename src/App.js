import logo from './logo.svg';
import './App.css';
// import FooterComp from './Components/CompFooter';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Profile';
import Wellcome from './Components/Wellcome';

function App() {


  const name = "Ingeniero"; // Esto es JS normal
  const age = 32;
  const email = "ea9089@hotmail.com";
  const res = <div>{name} {age} {email} </div>


  return ( // Aquí se usa JSX
    <div className="App">
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
      <Wellcome name="Dante" />
      <Wellcome name="Triz" />
      <Wellcome name="Edw" />

      {/* Utilizando variables, estas se llaman en corchetes porque es JSX */}
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
      <h2>{res}</h2>


    
    </div>
  );
}



export default App;
