probarAtributos=function(){
    let persona = {
        nombre : "Pedro",
        apellido : "Morales",
        edad : 24,
        estaVido : true
    }
    console.log(persona.nombre);
    console.log(persona.estaVido);
    if (persona.estaVido == false){
        console.log("No esta vivo");
    }else{
        console.log("Esta vivo");
    }
}
crearProducto=function(){
    let producto1 = {
        nombre : "Manzana",
        precio : 1.50,
        stock : 10
    }
    let producto2 = {
        nombre : "Peras",
        precio : 1.10,
        stock : 5
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock){
        console.log("Producto 2 tiene mas stock");
    }
}