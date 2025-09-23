calcularPromedioNotas=function(){
    let nota1 = recuperarFloat('txtNota1');
    let nota2 = recuperarFloat('txtNota2');
    let nota3 = recuperarFloat('txtNota3');
    let promedio = calcularPromedio(nota1, nota2, nota3);
    let msgPromedio = promedio.toFixed(2);
    mostrarTexto('lblPromedio', msgPromedio);
    if(promedio<5 && promedio > 0){
        mostrarTexto('lblRespueta', 'REPROBADO')
        mostrarImagen('imagenPromedio', './imagenes/verdrietig-sad.gif')
    }
    else if(promedio>=5 && promedio<=8){
        mostrarTexto('lblRespueta', 'BUEN TRABAJO')
        mostrarImagen('imagenPromedio', './imagenes/GIFTEXITO.gif')
    }
    else if(promedio>8 && promedio<=10){
        mostrarTexto('lblRespueta', 'EXCELENTE!')
        mostrarImagen('imagenPromedio', './imagenes/EXCELENTE.gif')
    }
    else{
        mostrarTexto('lblRespueta', 'DATOS INCORRECTOS!')
        mostrarImagen('imagenPromedio', './imagenes/INCORRETO.gif')
    }
}   