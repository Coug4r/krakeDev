validarEstructura=function(placa){
    let longitud = placa.length;
    let primerCaracter = placa.charAt(0);
    let segundoCaracter = placa.charAt(1);
    let tercerCaracter = placa.charAt(2);
    let guion = placa.charAt(3);
    let digito1 = placa.charAt(4);
    let digito2 = placa.charAt(5);
    let digito3 = placa.charAt(6);
    //digito no siempre usado en las placas.
    let digito4 = placa.charAt(7);
    let validez = true;

    if (longitud < 7 || longitud > 8){
        mostrarTexto('lblError1', "La placa debe tener de 7 a 8 caracteres")
        validez = false;
    }
    if (esMayuscula(primerCaracter) == false){
        mostrarTexto('lblError1', "El primer caracter tiene que ser MAYUSCULA")
        validez = false;
    }
    if (esMayuscula(segundoCaracter) == false){
        mostrarTexto('lblError1', "El segundo caracter tiene que ser MAYUSCULA")
        validez = false;
    }    
    if (esMayuscula(tercerCaracter) == false){
        mostrarTexto('lblError1', "El tercer caracter tiene que ser MAYUSCULA")
        validez = false;
    }
    if (esGuion(guion) == false){
        mostrarTexto('lblError1', "El cuarto caracter tiene que ser un GUION")
        validez = false;
    }
    if (esDigito(digito1) == false){
        mostrarTexto('lblError1', "El quinto caracter tiene que ser un DIGITO")
        validez = false;
    }  
    if (esDigito(digito2) == false){
        mostrarTexto('lblError1', "El sexto caracter tiene que ser un DIGITO")
        validez = false;
    }       
    if (esDigito(digito3) == false){
        mostrarTexto('lblError1', "El septimo caracter tiene que ser un DIGITO")
        validez = false;
    }     
    return !validez;
}