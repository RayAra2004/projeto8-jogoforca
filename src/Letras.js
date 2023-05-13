export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return(
        <div className='letras'>
            {alfabeto.map(letra => <Letra letra = {letra} estadoBotao={props.estadoBotao}/>)}
        </div>
    );
}

function Letra(props){
    return(
        <div className="botao">
            <button disabled={props.estadoBotao} className={`${props.estadoBotao ? 'desabilitado' : 'habilitado'}`}>{props.letra.toUpperCase()}</button>
        </div>
    );
}
