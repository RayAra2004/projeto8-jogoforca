import forca0 from './assets/img/forca0.png';
import forca1 from './assets/img/forca1.png';
import forca2 from './assets/img/forca2.png';
import forca3 from './assets/img/forca3.png';
import forca4 from './assets/img/forca4.png';
import forca5 from './assets/img/forca5.png';
import forca6 from './assets/img/forca6.png';

export default function Jogo(props){
    const {revelacaoPalavra, setEstadoBotao, setQtdErros, qtdErros, setCaracteresPalavra, setRevelacaoPalavra, resultado, setResultado, caracteresPalavra} = props;
    
    if(!revelacaoPalavra.includes('_') && revelacaoPalavra.length > 0){
        fimJogo(setEstadoBotao, 0, setResultado, caracteresPalavra, setRevelacaoPalavra)
    }
    return(
        <div className="jogo">
            <div className="divForca">
                <img data-test="game-image" src={vericaImg(qtdErros, setEstadoBotao, setResultado, caracteresPalavra, setRevelacaoPalavra)}></img>
            </div>
            <div className='divEscolherPalavra'>
                <button data-test="choose-word" onClick={() => 
                    {
                        escolherPalavra(props.palavras, props.setPalavra, setCaracteresPalavra, setRevelacaoPalavra);
                        props.setEstadoBotao(false);
                        setQtdErros(0);
                        setResultado('');
                    }}
                    >Escolher Palavra</button>
            </div>
            <div data-test="word" className='palavra'>
                {revelacaoPalavra.map(caracter => <Palavra caracter = {caracter} resultado = {resultado}/>)}
            </div>
        </div>
    );
}

function Palavra(props){
    return(
        <div>
            <p className={props.resultado}>{props.caracter}</p>
        </div>
    );
}

function escolherPalavra(palavras, setPalavra, setCaracteresPalavra, setRevelacaoPalavra){
    const palavraEscolhida = palavras[getRandomInt(0, palavras.length - 1)];
    const caracteres =  palavraEscolhida.split('');
    setPalavra(palavraEscolhida);
    setCaracteresPalavra(caracteres);
    const undeline = [];
    caracteres.forEach(() => undeline.push('_'));
    setRevelacaoPalavra([...undeline]);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function vericaImg(qtdErros, setEstadoBotao, setResultado, caracteresPalavra, setRevelacaoPalavra){
    if(qtdErros === 0){
        return forca0
    }
    if(qtdErros === 1){
        return forca1
    }
    if(qtdErros === 2){
        return forca2
    }
    if(qtdErros === 3){
        return forca3
    }
    if(qtdErros === 4){
        return forca4
    }
    if(qtdErros === 5){
        return forca5
    }
    if(qtdErros === 6){
        fimJogo(setEstadoBotao, 1, setResultado, caracteresPalavra, setRevelacaoPalavra);
        return forca6
    }
}

function fimJogo(setEstadoBotao, res, setResultado, caracteresPalavra, setRevelacaoPalavra){
    if(res === 1){
        setEstadoBotao(true);
        setResultado('perdeu')
        setRevelacaoPalavra(caracteresPalavra)       
    }else{
        setEstadoBotao(true);
        setResultado('ganhou')
    }
}