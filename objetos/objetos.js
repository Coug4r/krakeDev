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
modificarAtributos=function(){
    let cuenta = {
        numero : '4053234123',
        saldo : 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente=function(){
    let cliente = {
        cedula : "1102182266",
        nombre : "Juan"
    };
// Si no existe el atributo JS lo agrega al objeto.
    let cliente1={};
    cliente1.nombre="Romeo";
    cliente1.apellido="Salcedo";
    cliente1.cedula="123512443";
}

incrementarSaldo=function(cuenta, monto){
    cuenta.saldo+=monto;
}


determinarMayor=function(persona1, persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else if (persona1.edad < persona2.edad){
        return persona2;
    }else{
        return null;
    }
}

probarIncrementoSaldo=function(){
    let cta = {
        numero:"123123123",
        saldo:34.0
    }
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}
probarDeterminarMayor=function(){
    let per1 = {
        nombre : "Daniel",
        edad : 45
    }
        let per2 = {
        nombre : "Luisa",
        edad : 48
    }
    let mayor = determinarMayor(per1, per2);
    if(mayor != null){
        console.log("El mayor es " + mayor.nombre);
    }
}
