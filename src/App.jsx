import { useState } from 'react';
import './App.css';

function App() {
const [list, setList] = useState([]);
const [undid, setUndid] = useState([]); // aqui vou armazenar a nova lista que sera com a aqueles que foram desfeitos

const handleClick = (event) => {
 
  const newDot = {
    clientX: event.clientX,
    clientY: event.clientY,
  };
  console.log(newDot);
  setList((prev) => [...prev, newDot]);
};
const handleUndu= (event) => {
  event.stopPropagation();
  console.log('undu');

  if(list.length === 0)
  {
    return;
  }

// para eu ter um histórico dos dots para serem recuperados.
  const lastItem= list[list.length-1];
 
  setUndid((prev) => [...prev, lastItem]);

  setList((prev) => {
    const newArr = [...prev].slice(0,-1);
    return newArr;
  })
};
// inseri um if aqui para a aplicação não crachar quando não houver mais dots para serem removidos.
const handleRedo = (event) => {
  event.stopPropagation();
  console.log('redo');
  if(undid.length === 0) {
    return;
  }

  const recoveredDot= undid[undid.length-1];
  setUndid((prev) => {
    const newArr = [...prev].slice(0,-1);
    return newArr;
});
setList((prev) => [...prev, recoveredDot]);

};

  return (
  <div id='page' onClick={handleClick}>
    <button onClick={handleUndu}>Desfazer</button>
    <button onClick={handleRedo}>Refazer</button>
  {list.map((item) => (
  <span 
  key={item.clientX}
  className='dot'
  style={{ left: item.clientX, top: item.clientY }}
  />
  ))} 
    </div>
);
}

export default App;
