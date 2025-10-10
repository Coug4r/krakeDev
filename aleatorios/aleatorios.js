aleatorios=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let numeroFinal;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*100;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    numeroFinal=aleatorioEntero+1;
    return numeroFinal;
}
generarAleatorios=function(){
    let aleatorios = [];
    let indice = recuperarInt('txtIndice');
    for (let i=0;i<indice;i++){
        console.log(i);
    }
}