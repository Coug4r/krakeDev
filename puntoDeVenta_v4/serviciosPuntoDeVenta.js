calcularValorDescuento=function(monto, porcentajedescuento){
    return (monto * porcentajedescuento) / 100;
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