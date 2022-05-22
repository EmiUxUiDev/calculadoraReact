import './App.css';
import logo from './img/freecodecamp.png'
import Boton from './componentes/Boton.jsx'
import Pantalla from './componentes/Pantalla.jsx'
import BotonClear from './componentes/BotonClear.jsx'
import { useState } from 'react'
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  };

  const calcularResultado = () => {
    input ? setInput(evaluate(input)) : alert('Ingrese valores para realizar el calculo')
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={logo}
          alt='Logo de FreeCodeCamp'
        />
      </div>

      <div className='contenedor-calculadora'>

        <Pantalla valor={input} />

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'><BotonClear manejarClear={() => setInput('')} >Clear</BotonClear> </div>

      </div>
    </div>
  );
}

export default App;
