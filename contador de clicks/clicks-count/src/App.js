import { useState } from 'react';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';

function App() {
  const [counter, setCounter] = useState(1)
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  
  const manejarClick = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
    else {
      alert("Maximo es 100")
    }
  };

  const reiniciarContador = () => {
    setCounter(0);
  };

  const generarNum = () => {
    const numeroGenerado = Math.floor(Math.random() * 101);
    setNumeroAleatorio(numeroGenerado);
    console.log(numeroGenerado);
  };

  const apuestaMayor = () => {
    if (counter >= numeroAleatorio) {
      alert("Ganaste tu numero es mas grande");
    }
    else {
      alert("Perdiste tu numero es menor");
    }
  };

  const apuestaMenor = () => {
    if (counter < numeroAleatorio) {
      alert("Ganaste tu numero es menor");
    }
    else {
      alert("Perdiste tu numero es mas grande");
    }
  };


  return (
    <div className="App">
      <h1 className="titulo">Apuesta</h1>
      <div className="contenedor-principal">
        <div className="contenedor-contador">
          <Contador
          numClicks={counter}
          />
        </div>
        <Boton 
        texto= "Click"
        esBotonDeClick={true}
        manejarClick= {manejarClick}
        />
        <Boton 
        texto= "Reiniciar"
        esBotonDeClick={false}
        manejarClick= {reiniciarContador}
        />
        <Boton 
        texto= "Mayor"
        esBotonDeClick={false}
        manejarClick= {apuestaMayor}
        />
        <Boton 
        texto= "Menor"
        esBotonDeClick={false}
        manejarClick= {apuestaMenor}
        />
        <Boton 
        texto= "Generar num"
        esBotonDeClick={false}
        manejarClick= {generarNum}
        />


      
      </div>


      
    </div>
  );
}

export default App;
