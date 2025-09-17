calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;
 
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto('txtProducto');
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat('txtPrecio');
    //3. Recuperar cantidad como int
    cantidad = recuperarInt('txtCantidad');
    //4. Recuperar el porcentaje de descuento como int
    porcentajeDescuento = recuperarInt('txtPorcentajeDescuento');
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
    mostrarTexto("lblSubtotal", valorSubtotal);
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
}