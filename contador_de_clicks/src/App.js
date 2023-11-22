import './App.css';
import Boton from './componentes/boton';
import logo from './imagenes/contador.png';

function App() {

  const manejarClick = ()=>{
    console.log('Click');
  }
  const reiniciarContador=()=>{
    console.log('reiniciar');
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
