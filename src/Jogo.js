import forca from './assets/img/forca0.png';

export default function Jogo(){
    return(
        <div className="jogo">
            <div className="divForca">
                <img src={forca}></img>
            </div>
            <div className='divEscolherPalavra'>
                <button>Escolher Palavra</button>
            </div>
        </div>
    );
}