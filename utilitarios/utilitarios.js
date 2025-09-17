recuperarTexto=function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}
recuperarInt=function(idComponente){
    let texto = recuperarTexto(idComponente);
    let int = parseInt(texto);
    return int;
}
recuperarFloat=function(idComponente){
    let texto = recuperarTexto(idComponente);
    let float = parseFloat(texto);
    return float;
}
mostrarTexto=function(idComponente, msg){
    let cmpTexto = document.getElementById(idComponente);
    let texto = cmpTexto.innerText = msg;
    return texto;
}
mostrarImagen=function(idComponente, rutaImagen){
    let componente = document.getElementById(idComponente);
    let imagen = componente.src = rutaImagen;
}
mostrarTextoEnCaja=function(idComponente, msg){
    let cmpTexto = document.getElementById(idComponente);
    let texto = cmpTexto.value = msg;
    return texto;
}