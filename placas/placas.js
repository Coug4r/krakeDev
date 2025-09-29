validarPlaca=function(){
    limpiar();
    let placa = recuperarTexto('txtPlaca');
    let erroresEstructura =  validarEstructura(placa);
    if (erroresEstructura == true){
        mostrarTexto('lblValidez', "PLACA NO VALIDA");
    }else{
        mostrarTexto('lblValidez', "PLACA VALIDA");
        let tipoVehiculo = obtenerTipoVehiculo(placa);
        let provincia = obtenerProvincia(placa);
        let picoYPlaca = obtenerDiaPicoYPlaca(placa);
        //Se valida y muetra la provincia.
        if (provincia == null){
            mostrarTexto('lblError0', "Provincia Incorrecta");
        }else{
            mostrarTexto("lblProbincia", "Provincia: " + provincia);
        }
        //Se valida y muetra el tipo de vehiculo.
        if (tipoVehiculo == null){
            mostrarTexto('lblError1', "Provincia Incorrecta");
        }else{
            mostrarTexto('lblTipo', "Tipo: " + tipoVehiculo);
        }
        if (picoYPlaca == null){
            mostrarTexto('lblError2', "Digitos incorrectos no coincide.");
        }else{
            mostrarTexto('lblDiapicoYplaca', "Pico y placa el dia: " + picoYPlaca);
        }
    }
}