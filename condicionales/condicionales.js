calcularTasaInteres=function(ingresoAnual){
    let tasaInteres
    ingresoAnual = parseFloat(ingresoAnual);
    if (ingresoAnual < 300000){
        tasaInteres = 16;
    }
    else if (ingresoAnual > 300000 && ingresoAnual<500000){
        tasaInteres = 15;
    }
    else if (ingresoAnual>500000 && ingresoAnual<1000000){
        tasaInteres = 14;
    }
    else if (ingresoAnual>1000000 && ingresoAnual<2000000){
        tasaInteres = 13;
    }
    else if (ingresoAnual >= 2000000){
        tasaInteres = 12;
    }
    return tasaInteres;
}
calcularCapacidadPago = function(edad, ingresos, egresos){
    edad = parseInt(edad);
    ingresos = parseFloat(ingresos);
    egresos = parseFloat(egresos);
    let capacidad = ingresos - egresos;
    let valorCuota;

    if (edad > 50){
        valorCuota = (capacidad * 30) / 100;
    }

    if (edad = 50){
        valorCuota = (capacidad * 40) / 100;
    }
    return valorCuota;
}
calcularDescuento = function(precio, cantidad){
    precio = parseFloat(precio);
    cantidad = parseInt(cantidad);
    let valorDescuento;
    if (cantidad < 3){
        valorDescuento = 0;
    }
    else if(cantidad >=3 && cantidad <=5){
        valorDescuento = 2;
    }
    else if(cantidad>=6 && cantidad<=11){
        valorDescuento = 3;
    }
    else if(cantidad >=12){
        valorDescuento = 4;
    }   
    valorDescuento = precio - ((precio * valorDescuento)/100);
    return valorDescuento;
}
determinarColesterolILDL = function(nivelColesterol){
    nivelColesterol = parseFloat(nivelColesrterol);
    let nivel;
    if(nivelColesterol > 100){
        nivel = 'Nivel de Colesterol LDL ALTO';
    }
    else{
        nivel = 'Nivel de Colesterol LDL NORMAL'
    }
    return nivel;
}
validarClave=function(clave){
    let valides;
    let numCarac = clave.lenght;
    if (numCarac >=8 && numCarac<=16){
        valides = true;
    }
    else{
        valides = false;
    }
    return valides;
}
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

esMinuscula=function(caracter){
    let asciiCode = caracter.charCodeAt(0);
    let valides;
    if (asciiCode>=97 && asciiCode<=122){
        valides = true;
    }
    else{
        valides = false;
    }
    return valides;
}
