
import './App.css';
import { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(Math.floor(Math.random() * 3));
  

  return (
    <div className="App">
      <h1> Numero al azar: {numero}</h1>
      
      
    </div>
  );
}

export default App;


/*Obtener un número aleatorio entre dos valores determinados
Este ejemplo devuelve un número aleatorio situado entre dos valores específicos. 
El valor devuelto será mayor o igual que min y menor que max.

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}*/