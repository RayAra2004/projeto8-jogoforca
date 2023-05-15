function fimJogo(setEstadoBotao, res, setResultado, caracteresPalavra, setRevelacaoPalavra){
    if(res === 1){
        setEstadoBotao(true);
        setResultado('perdeu')
        setRevelacaoPalavra(caracteresPalavra)       
    }else{
        setEstadoBotao(true);
        setResultado('ganhou')
        setRevelacaoPalavra(caracteresPalavra)
    }
}

export default fimJogo;