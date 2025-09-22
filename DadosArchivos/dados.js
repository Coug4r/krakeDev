jugar=function(){
    let aleatorio = lanzarDado();
    cambiarTexto('lblNumero', aleatorio)
    if (aleatorio > 3){
        cambiarTexto('lblGame', 'Es mayor que tres GANASTE...')
    }
    else{
        cambiarTexto('lblGame', 'Es menor que tres estas de malas...')
    }
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}