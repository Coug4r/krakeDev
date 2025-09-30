let puntosJugador = 0;
let puntosPc = 0;
jugar=function(selecJugador){
    let pcGame = generarElemento();
    mostrarImagen("imgPc",generarRuta(pcGame));
    let ganador = determinarGanador(pcGame, selecJugador);
    if (ganador == 1){
        mostrarTexto('lblgame', "PERDISTE LA PARTIDA!!")
        puntosPc = puntosPc + 1;
    }else if(ganador == 2){
        mostrarTexto('lblgame', "GANASTE LA PARTIDA!!")
        puntosJugador = puntosJugador + 1;
    }else{
        mostrarTexto('lblgame', "EMPATE!!")
    }
    if(puntosJugador == 5){
        mostrarTexto("lblgame", "GANASTE EL JUEGO!!!")
    }else if(puntosPc == 5){
        mostrarTexto("lblgame", "EL COMPUTADOR TE A VENCIDO!!!")
    }
    mostrarTexto('lblPuntosJugador', puntosJugador);
    mostrarTexto('lblPuntosPc', puntosPc);
}
limpiar=function(){
    mostrarImagen("imgPc",'');
    mostrarTexto('lblgame', "")
    mostrarTexto('lblPuntosJugador', '0');
    mostrarTexto('lblPuntosPc', '0');
    puntosJugador = 0;
    puntosPc = 0;
}