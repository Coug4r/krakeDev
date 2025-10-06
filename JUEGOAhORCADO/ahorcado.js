//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

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
    coincidencias ++;
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
    if(palabrasEncontradas == 0){
        errores ++;
        mostrarAhorcado();
    }else{
        alert("La letra no es parte de la palabra!!")
    }
}
ingresarLetra=function(){
    intentos ++;
    let caracter = recuperarTexto("txtLetra");
    if (esMayuscula(caracter)==true){
        validar(caracter);
    }else{
        alert("Solo se aceptan MAYUSCULAS!!")
    }
    if(coincidencias==5){
        alert("HA GANADO!!");
    }else if(intentos==10){
        alert("HA PERDIDO!!")
    }
}
const imgs = {
    1: "Ahorcado_01.png",
    2: "Ahorcado_02.png",
    3: "Ahorcado_03.png",
    4: "Ahorcado_04.png",
    5: "Ahorcado_05.png",
    6: "Ahorcado_06.png",
    7: "Ahorcado_07.png",
    8: "Ahorcado_08.png",
    9: "Ahorcado_09.png",
}
mostrarAhorcado=function(){
    let src = imgs[errores] || "";
    mostrarImagen('ahorcadoImagen', src);
}
