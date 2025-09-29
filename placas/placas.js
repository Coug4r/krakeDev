validarPlaca=function(){
    limpiar();
    let placa = recuperarTexto('txtPlaca');
    let erroresEstructura =  validarEstructura(placa);
}