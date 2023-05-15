import { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras';
import palavras from './palavras';
import './reset.css';
import './style.css';
import Chute from './Chute';

function App() {
  const [estadoBotao, setEstadoBotao] = useState(true);
  const [qtdErros, setQtdErros] = useState(0);
  const [palavra, setPalavra] = useState('');
  const [caracteresPalavra, setCaracteresPalavra] = useState([]);
  const [revelacaoPalavra, setRevelacaoPalavra] = useState([]);
  const [resultado, setResultado] = useState('');
  const [chute, setChute] = useState('');

  return (
    <div>
      <Jogo palavras = {palavras} 
        palavra = {palavra} 
        setPalavra = {setPalavra}
        setEstadoBotao = {setEstadoBotao}
        setCaracteresPalavra = {setCaracteresPalavra}
        revelacaoPalavra = {revelacaoPalavra}
        setRevelacaoPalavra = {setRevelacaoPalavra}
        qtdErros = {qtdErros}
        setQtdErros = {setQtdErros}
        resultado = {resultado}
        setResultado = {setResultado}
        caracteresPalavra = {caracteresPalavra}
      />

      <Letras 
        estadoBotao = {estadoBotao}
        setEstadoBotao = {setEstadoBotao}
        caracteresPalavra = {caracteresPalavra}
        revelacaoPalavra = {revelacaoPalavra}
        setRevelacaoPalavra = {setRevelacaoPalavra}
        qtdErros = {qtdErros}
        setQtdErros = {setQtdErros}
      />

      <Chute 
        chute = {chute}
        setChute = {setChute}
        caracteresPalavra = {caracteresPalavra}
        setEstadoBotao = {setEstadoBotao}
        setResultado = {setResultado}
        setRevelacaoPalavra = {setRevelacaoPalavra}
        setQtdErros = {setQtdErros}
      />
      
    </div>
  );
}

export default App;
