validarPassword=function(password){
    let caracter;
    let longitud = password.length;
    let errores = ""
    let validez = false;
    if (longitud>=8 && longitud <=16){
        validez = true;
    }else{
        errores += "El password debe tener de 8 a 16 caracteres! \n"
    }   
    for(let posicion=0;posicion<longitud;posicion ++){
        caracter = password.charAt(posicion);
        if(esMayuscula(caracter)==true){
            validez = true;
        }
        }
    if(validez==false){
        errores += " El password debe tener una Mayuscula! \n"
    }else{
        validez = false;
    }
    for(let posicion=0;posicion<longitud;posicion ++){
        caracter = password.charAt(posicion);
        if(esDigito(caracter)==true){
            validez = true;
        }
    }
    if(validez==false){
        errores += " El password debe tener un digito!\n"
    }else{
        validez = false;
    }
    for(let posicion=0;posicion<longitud;posicion ++){
        caracter = password.charAt(posicion);
        if(esGuion(caracter)==true || esGuionMedio(caracter)==true || esAsterisco(caracter)==true){
            validez = true;
        }
    }
    if(validez==false){
        errores += " El password debe tener un caracter especial (*, _, -)!\n"
    }
    return errores
}
ejecutarValidacion=function(){
    mostrarTexto('lblValides', "");
    let passwd = recuperarTexto('txtPasswd')
    let valides = validarPassword(passwd);
    if (valides == ""){
        mostrarTexto('lblValides', "Password Valida!");
    }else{
        mostrarTexto('lblValides', "Password Invalida! \n" + valides);
    }
}