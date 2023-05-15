import fimJogo from "./fimJogo";

export default function Chute(props){
    const {chute, setChute, caracteresPalavra, setEstadoBotao, setResultado, setRevelacaoPalavra, setQtdErros, estadoBotao} = props;

    return(
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input disabled= {estadoBotao} data-test="guess-input" onChange={event => setChute(event.target.value)} value={chute}></input>
            <button disabled = {estadoBotao} data-test="guess-button" onClick={event => {
                chutar(chute, setChute, caracteresPalavra, setEstadoBotao, setResultado, setRevelacaoPalavra, setQtdErros)
                
            }
            }>Chutar</button>
        </div>
    );
}

function chutar(chute, setChute, caracteresPalavra, setEstadoBotao, setResultado, setRevelacaoPalavra, setQtdErros){
    const caracteresChute = chute.split('');
    if(JSON.stringify(caracteresChute) === JSON.stringify(caracteresPalavra)){
        fimJogo(setEstadoBotao, 0, setResultado, caracteresPalavra, setRevelacaoPalavra)
        setChute('')
    } else{
        setQtdErros(6)
        fimJogo(setEstadoBotao, 1, setResultado, caracteresPalavra, setRevelacaoPalavra)
        setChute('')
    }
}