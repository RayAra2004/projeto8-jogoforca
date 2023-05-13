import { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras';
import './reset.css';
import './style.css';

function App() {
  const [estadoBotao, setEstadoBotao] = useState(true);
  return (
    <div>
      <Jogo/>
      <Letras estadoBotao = {estadoBotao} setEstadoBotao = {setEstadoBotao}/>
      
    </div>
  );
}

export default App;
