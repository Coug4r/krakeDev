saludar=function(){
    //Recuperar caja de Nombre
    let nombre = recuperarTexto('txtNombre');
    //Recuperar caja de Apellido
    let apellido = recuperarTexto('txtApellido');
    //Recuperar entero
    let entero = recuperarInt('txtEdad')
    //Recuperar float
    let float = recuperarFloat('txtEstatura')

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