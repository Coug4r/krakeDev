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
    palabraValida = true;
    for (let i=0;i<palabra.length;i++){
        let caracter = palabra.charAt(i);
        if(esMayuscula(caracter)==false){
            palabraValida = false;
        }
    }
    if(largPalabra == 5 && palabraValida == true){
        palabraSecreta = palabra;
    }else{
        alert("LA PALABRA DEBE TENER 5 LETRAS Y TODAS MAYUSCULAS!!")
    }
}
const poss = {
    0:"div0",
    1:"div1",
    2:"div2",
    3:"div3",
    4:"div4"
}
mostrarLetra=function(letra, posicion){
    mostrarTexto(poss[posicion], letra);
}
validar=function(letra){
    let palabrasEncontradas = 0;
    for (let posicion=0;posicion<palabraSecreta.length;posicion++){
        let caracter = palabraSecreta.charAt(posicion);
        if(caracter == letra){
            mostrarLetra(letra, posicion);
            palabrasEncontradas ++ ;
        }
    }
}
ingresarLetra=function(){
    let caracter = recuperarTexto("txtLetra");
    if (esMayuscula(caracter)==true){
        validar(caracter);
    }else{
        alert("Solo se aceptan MAYUSCULAS!!")
    }
}
