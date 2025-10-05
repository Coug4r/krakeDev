//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
esMayuscula=function(caracter){
    let asciiCode = caracter.charCodeAt(0);
    let valides;
    if (asciiCode>=65 && asciiCode<=90){
        valides = true;
    }
    else{
        valides = false;
    }
    return valides;
}
guardarPalabra=function(){
    let palabra = recuperarTexto("txtSecreta");
    let largPalabra = palabra.length;
    if(palabra == 5 && esMayuscula(largPalabra)){
        palabraSecreta = palabra;
    }else{
        alert("LA PALABRA DEBE TENER 5 LETRAS Y TODAS MAYUSCULAS!!")
    }
}
