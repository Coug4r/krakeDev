recuperarTexto =function(idComponente){
        let componente;
        let valorIngresado;
        componente=document.getElementById(idComponente);
        valorIngresado=componente.value;
        return valorIngresado;
}
recuperarInt=function(idComponente){
    let valorCajaEntero = parseInt(recuperarTexto(idComponente));
    return valorCajaEntero;
}
recuperarFloat=function(idComponente){
    let valorCajaFloat = parseFloat(recuperarTexto(idComponente));
    return valorCajaFloat;
}
mostrarTexto=function(idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja=function(idComponente, mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}
mostrarImagen=function(idComponente, rutaImagen){
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;

}