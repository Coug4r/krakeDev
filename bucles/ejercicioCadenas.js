ejecutarPueba1=function(){
    let mensaje = recuperarTexto('txtCadena')
    recorrerCadena(mensaje);
}
ejecutarPueba2=function(){
    let mensaje = recuperarTexto('txtCadena')
    mostrarTexto("lblCadena", invertirCadena(mensaje));
}

recorrerCadena=function(cadena){
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter: " + caracter + " posicion "+posicion);
    }
    for(let posicion=0;posicion<cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter: " + caracter + " posicion "+posicion);
    }
}
invertirCadena=function(cadena){
    let caracter;
    let invercion = "";
    for(let posicion=cadena.length;posicion>=0;posicion--){
        caracter = cadena.charAt(posicion);
        invercion += caracter;
    }
    return invercion;
}