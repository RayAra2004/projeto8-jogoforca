export default function Letras(props){
    const {caracteresPalavra, revelacaoPalavra, setRevelacaoPalavra, qtdErros, setQtdErros} = props;
    const botoesEscolhidos = [];
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return(
        <div className='letras'>
            {alfabeto.map(letra => <Letra 
            key = {letra} 
            botoesEscolhidos = {botoesEscolhidos} 
            caracteresPalavra = {caracteresPalavra} 
            letra = {letra} 
            estadoBotao={props.estadoBotao}
            revelacaoPalavra = {revelacaoPalavra}
            setRevelacaoPalavra = {setRevelacaoPalavra}
            qtdErros = {qtdErros}
            setQtdErros = {setQtdErros}
            />
            )}
        </div>
    );
}

function Letra(props){
    return(
        <div className="botao">
            <button onClick={(event) => {
                confereLetra(
                    props.botoesEscolhidos, 
                    props.letra, 
                    props.caracteresPalavra, 
                    props.revelacaoPalavra,
                    props.setRevelacaoPalavra,
                    props.qtdErros,
                    props.setQtdErros
                )

                event.target.disabled = true;
                event.target.className = 'desabilitado';
            }
                } 
                disabled={props.estadoBotao} 
                className={`${props.estadoBotao ? 'desabilitado' : 'habilitado'}`}>{props.letra.toUpperCase()}</button>
        </div>
    );
}

function confereLetra(botoesEscolhidos, letra, caracteresPalavra, revelacaoPalavra, setRevelacaoPalavra, qtdErros, setQtdErros){
    let i = 0;
    console.log(revelacaoPalavra)
    caracteresPalavra.forEach(l => {
        if(l === letra){
            revelacaoPalavra[i] = letra.toUpperCase()
        }
        i++;
    });
    setRevelacaoPalavra([...revelacaoPalavra]);
    botoesEscolhidos.push(letra);
    if(!caracteresPalavra.includes(letra)){
        setQtdErros(qtdErros + 1);
    }
}