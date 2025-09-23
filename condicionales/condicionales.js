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
