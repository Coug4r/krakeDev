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
    //MOstrar imagen
    let imagen = mostrarImagen('imgSaludo', './imagenes/gato.gif');
    //Mostrar texto en caja
    let textoCaja = mostrarTextoEnCaja('txtNombre', '')
}