calcularValorDescuento=function(monto, porcentajedescuento){
    return (monto * porcentajedescuento) / 100;
}

productoValido=function(producto, idComponenteError){
    let numCaracteres = producto.length;
    let validez = true;
    if(numCaracteres > 10){
        validez = false
        mostrarTexto(idComponenteError, "Usar menos de 10 caracteres!" )
    }
    else if(producto == ""){
        validez = false;
        mostrarTexto(idComponenteError, "Campo Obligatorio!" )
    }    
    return validez;
}
cantidadValida=function(cantidad, idComponenteError){
    let validez = true;
    if (cantidad < 0 || cantidad > 100 ){
        validez = false;
        mostrarTexto(idComponenteError, "La cantidad entre 0 y 100!" )
    }
    else if(isNaN(cantidad)){
        validez = false;
        mostrarTexto(idComponenteError, "Campo Obligatorio!" )
    }    
    return validez;
}
precioValido=function(precio, idComponenteError){
    let validez = true;
    if(precio < 0 || precio > 50 ){
        validez = false;
        mostrarTexto(idComponenteError, "El precio debe ir desde 0 a 50" )
    }
    else if(isNaN(precio)){
        validez = false;
        mostrarTexto(idComponenteError, "Campo Obligatorio!" )
    }
    return validez;
}

calculaDescuentoPorVolume=function(subtotal, cantidad){
    let descuento
    if(cantidad <3){
        descuento = 0;
    }
    if(cantidad >=3 && cantidad<=5){
        descuento = (subtotal * 3) / 100;
    }
    if(cantidad >=6 && cantidad<=11){
        descuento = (subtotal * 4) / 100;
    }    
    if(cantidad >= 12){
        descuento = (subtotal * 5) / 100;
    }    
    return descuento;
}
calcularIVA=function(monto){
    return monto * (12 / 100);
}
calcularSubtotal=function(precio, cantidad){
    return precio * cantidad;
}
calcularTotal=function(subtotal, descuento, iva){
    return (subtotal - descuento) + iva;
}