import { useState } from 'react';
import forca0 from './assets/img/forca0.png';
import forca1 from './assets/img/forca1.png';
import forca2 from './assets/img/forca2.png';
import forca3 from './assets/img/forca3.png';
import forca4 from './assets/img/forca4.png';
import forca5 from './assets/img/forca5.png';
import forca6 from './assets/img/forca6.png';

export default function Jogo(props){
    const {revelacaoPalavra,qtdErros, setCaracteresPalavra, setRevelacaoPalavra} = props;
    return(
        <div className="jogo">
            <div className="divForca">
                <img src={vericaImg(qtdErros)}></img>
            </div>
            <div className='divEscolherPalavra'>
                <button onClick={() => 
                    {
                        escolherPalavra(props.palavras, props.setPalavra, setCaracteresPalavra, setRevelacaoPalavra);
                        props.setEstadoBotao(false);
                    }}
                    >Escolher Palavra</button>
            </div>
            <div className='palavra'>
                {revelacaoPalavra.map(caracter => <Palavra caracter = {caracter}/>)}
            </div>
        </div>
    );
}

function Palavra(props){
    return(
        <div>
            <p>{props.caracter}</p>
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
    setRevelacaoPalavra(undeline);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function vericaImg(qtdErros){
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
        return forca6
    }
}