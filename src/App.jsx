import { useState } from 'react';
import './App.css';

function App() {
const [list, setList] = useState([]);
const handleClick = (event) => {
 
  const newDot = {
    clientX: event.clientX,
    clientY: event.clientY
  }
  // copio o que já tinha na minha state com o uso do spread operator e crio um novo array, e passo um novo valor para ele.
  setList((prev) => [...prev, newDot]);
}
  return <div id='page' onClick={handleClick}>
    {JSON.stringify(list)} 
    <span className='dot'/>
    </div>;
}

export default App;

// fazendo o stringfy eu consigo ver se está retornando os valores do novo array a partir dos cliques sucessivos na tela.