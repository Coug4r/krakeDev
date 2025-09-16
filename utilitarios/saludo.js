saludar=function(){
    //Recuperar caja de Nombre
    let nombre = recuperarTexto('txtNombre');
    //Recuperar caja de Apellido
    let apellido = recuperarTexto('txtApellido');

}

recuperarTexto=function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}