obtenerAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let valor;
    aleatorio = Math.random();
    numeroMultiplicado=aleatorio*3;
    numeroMultiplicado = parseInt(numeroMultiplicado);
    valor = numeroMultiplicado + 1;
    return valor;
}
const jugada = {
    1: "Piedra",
    2: "Papel",
    3: "Tijera"
} 
generarElemento=function(){
    let game = obtenerAleatorio();
    return jugada[game];
}

const winner = {
    "Piedra":"Papel",
    "Papel":"Tijera",
    "Tijera":"Piedra"
}
determinarGanador=function(eleccionJugador1, eleccionJugador2){
    let ganador;
    if (eleccionJugador2 == winner[eleccionJugador1]){
        ganador = 2;
    }else if(eleccionJugador1 == eleccionJugador2){
        ganador = 0;
    }else{
        ganador = 1;
    }
    return ganador;
}
generarRuta=function(nombre){
    let ruta = "./imagenes/"+ nombre + ".png";
    console.log(ruta);
    return ruta
}
