let notas = [];

agregarElementos=function(){
    
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR = notas[indice];
        console.log(notaR);
    }
}

porbarAgregar=function(){
    let notaRecuperada;
    notaRecuperada = recuperarInt('txtNota')
    agregarNota(notaRecuperada);
}

agregarNota=function(nota){
    notas.push(nota);
}

calcularPromedio=function(){
    let sumaNotas = 0;
    for(let indice=0;indice<notas.length;indice++){
        sumaNotas += notas[indice];
    }
    let promedio = sumaNotas / notas.length;
    return promedio
}
ejecutarPromedio=function(){
    promedios = calcularPromedio();
    mostrarTexto('lblPromedio', 'Promedio de las notas: ' + promedios);
}