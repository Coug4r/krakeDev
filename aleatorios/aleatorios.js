randomNum =function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let numeroFinal;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    numeroFinal=aleatorioEntero+1;
    return numeroFinal;
}
generarAleatorios=function(){
    let aleatorios = [];
    let indice = recuperarInt('txtIndice');
    for (let i=0;i<indice;i++){
        aleatorios.push(randomNum());
    }
    mostrarResultados(aleatorios);
}
mostrarResultados=function(arregloNumeros){
    let cmpTabla = document.getElementById('divTabla');
    let contenidoTabla='<table><tr><th>RESULTADOS</th></tr>';
    for(let i=0;i<arregloNumeros.length;i++){
        let resultado = arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+= resultado;
        contenidoTabla+="</tr></td>";
    }
        contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}