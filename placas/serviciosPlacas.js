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
        mostrarTexto('lblError0', "La placa debe tener de 7 a 8 caracteres")
        validez = false;
    }
    if (esMayuscula(primerCaracter) == false){
        mostrarTexto('lblError1', "El primer caracter tiene que ser MAYUSCULA")
        validez = false;
    }
    if (esMayuscula(segundoCaracter) == false){
        mostrarTexto('lblError2', "El segundo caracter tiene que ser MAYUSCULA")
        validez = false;
    }    
    if (esMayuscula(tercerCaracter) == false){
        mostrarTexto('lblError3', "El tercer caracter tiene que ser MAYUSCULA")
        validez = false;
    }
    if (esGuion(guion) == false){
        mostrarTexto('lblError4', "El cuarto caracter tiene que ser un GUION")
        validez = false;
    }
    if (esDigito(digito1) == false){
        mostrarTexto('lblError5', "El quinto caracter tiene que ser un DIGITO")
        validez = false;
    }  
    if (esDigito(digito2) == false){
        mostrarTexto('lblError6', "El sexto caracter tiene que ser un DIGITO")
        validez = false;
    }       
    if (esDigito(digito3) == false){
        mostrarTexto('lblError7', "El septimo caracter tiene que ser un DIGITO")
        validez = false;
    }  
    if (longitud == 8 && esDigito(digito4) == false){
        mostrarTexto('lblError8', "El octavo caracter tiene que ser un DIGITO")
        validez = false;
    }         
    return !validez;
}
limpiar=function(){
    mostrarTexto("lblError0", "");
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
    mostrarTexto("lblError4", "");
    mostrarTexto("lblError5", "");
    mostrarTexto("lblError6", "");
    mostrarTexto("lblError7", "");
    mostrarTexto("lblError8", "");
    mostrarTexto("lblProbincia", "");
    mostrarTexto("lblTipo", "");
}
const provincias = {
  A: "Azuay",
  B: "Bolívar",
  U: "Cañar",
  C: "Carchi",
  X: "Cotopaxi",
  H: "Chimborazo",
  O: "El Oro",
  E: "Esmeraldas",
  W: "Galápagos",
  G: "Guayas",
  I: "Imbabura",
  L: "Loja",
  R: "Los Ríos",
  M: "Manabí",
  V: "Morona Santiago",
  N: "Napo",
  S: "Pastaza",
  P: "Pichincha",
  K: "Sucumbíos",
  Q: "Orellana",
  T: "Tungurahua",
  Z: "Zamora Chinchipe",
  Y: "Santa Elena"
};

obtenerProvincia=function(placa){
    let primerCaracter = placa.charAt(0);
    return provincias[primerCaracter] || null;
}

const tipos = {
    A: "Vehiculo Comercial",
    Z: "Vehiculo Comercial",
    E: "Vehiculo gubernamentales",
    X: "Vehiculo de uso oficial",
    S: "Vehiculo de gobierno provincial",
    M: "Vehiculo municipal",
}
opbtenerTipoVehiculo=function(placa){
    let segundoCaracter = placa.charAt(1);
    let asciiCode = segundoCaracter.charCodeAt(0);
    let validez;
    if (asciiCode>=65 && asciiCode<=90){
        return tipos[segundoCaracter] || "Vehiculo particular";
    }else{
        return null;
    }
    
}