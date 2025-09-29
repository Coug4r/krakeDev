validarPlaca=function(){
    limpiar();
    let placa = recuperarTexto('txtPlaca');
    let erroresEstructura =  validarEstructura(placa);
    if (erroresEstructura == true){
        mostrarTexto('lblValidez', "PLACA NO VALIDA");
    }else{
        mostrarTexto('lblValidez', "PLACA VALIDA");
    }
}