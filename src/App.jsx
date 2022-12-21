import { useState } from 'react';
import './App.css';

function App() {
const [list, setList] = useState([]);
const handleClick = (event) => {
 
  const newDot = {
    clientX: event.clientX,
    clientY: event.clientY,
  };
  console.log(newDot);
  setList((prev) => [...prev, newDot]);
};
// stopProgation impede que quando eu clicar no "desfazer", um novo dot seja exibido em cima do botão.
const handleUndu= (event) => {
  event.stopPropagation();
  console.log('undu');
 
  // Agora trabalha-se na função que vai fazer a retirada do último dot clicado.

  setList((prev) => {
    const newArr = [...prev].slice(0,-1);
    return newArr;
  })
};
// Por ser um array eu consigo fazer um map no meu list. Aqui itero e faço um loop nas informações que tenho.
  return (
  <div id='page' onClick={handleClick}>
    <button onClick={handleUndu}>Desfazer</button>
  {list.map((item) => (
  <span 
  className='dot'
  style={{ left: item.clientX, top: item.clientY }}
  />
  ))} 
    </div>
);
}

export default App;
