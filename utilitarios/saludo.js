saludar=function(){
    //Recuperar caja de Nombre
    let nombre = recuperarTexto('txtNombre');
    //Recuperar caja de Apellido
    let apellido = recuperarTexto('txtApellido');
    //Recuperar entero
    let entero = recuperarInt('txtEdad')
    //Recuperar float
    let float = recuperarFloat('txtEstatura')
    //Mostrar Texto
    let texto = mostrarTexto('lblResultado', nombre + ' ' + apellido)

}

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
