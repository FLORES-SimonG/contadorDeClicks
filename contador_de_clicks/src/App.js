import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/boton';
import logo from './imagenes/contador.png';
import { useState } from 'react'; //con esto puedo comenzar a trabajar con estados.

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = ()=>{
    setNumClicks(numClicks + 1);
  }
  const reiniciarContador=()=>{
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
        className='logo'
        src={logo}
        alt='Logo principal'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}/>
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
