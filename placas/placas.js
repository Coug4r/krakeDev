validarPlaca=function(){
    limpiar();
    let placa = recuperarTexto('txtPlaca');
    let erroresEstructura =  validarEstructura(placa);
    if (erroresEstructura == true){
        mostrarTexto('lblValidez', "PLACA NO VALIDA");
    }else{
        mostrarTexto('lblValidez', "PLACA VALIDA");
        let provincia = obtenerProvincia(placa);
        if (provincia == null){
            mostrarTexto('lblError0', "Provincia Incorrecta")
        }else{
            mostrarTexto("lblProbincia", "Provincia: " + provincia);
        }

    }
}