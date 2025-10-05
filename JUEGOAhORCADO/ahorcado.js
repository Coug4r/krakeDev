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
const poss = {
    1:"div0",
    2:"div1",
    3:"div2",
    4:"div3",
    5:"div4"
}
mostrarLetra=function(letra, posicion){
    mostrarTexto(poss[posicion], letra);
}
validar=function(letra){
    let palabrasEncontradas;
    for (let posicion=0;posicion<letra.length;posicion++){
        let caracter = palabraSecreta.charAt(posicion);
        if(caracter == letra){
            mostrarLetra(letra, posicion);
            palabrasEncontradas ++ ;
        }
    }
}