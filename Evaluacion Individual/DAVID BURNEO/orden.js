let personas = [{nombre:"Marcos", edad:18},{nombre:"Roberto", edad:15}, {nombre:"Kate", edad:25}, {nombre:"Diana", edad:12}, {nombre:"Benja", edad:5}]

agregarPersona=function(){
    mostrarTexto('lblError1', "");
    mostrarTexto('lblError2', "");
    let validez = true;
    let nombrePersona = recuperarTexto('txtNombre');
    let edadPersona = recuperarInt("txtEdad");
    if(nombrePersona.length < 3){
        mostrarTexto('lblError1', "El nombre debe tener al menos 3 caracteres");
        validez = false
    }
    if(edadPersona<0 || edadPersona > 100){
        mostrarTexto('lblError2', "La edad debe tener valores desde 0 a 100");
        validez = false;
    }
    if(validez == true){
        let nuevaPersona = {}
        nuevaPersona.nombre=nombrePersona;
        nuevaPersona.edad=edadPersona;
        personas.push(nuevaPersona);
        alert("Persona agregada correctamente!");
        mostrarPersonas();
    }
}
mostrarPersonas=function(){
    let cmpTabla = document.getElementById("lblTabla");
    let contenidoTabla = "<table> <tr>"
    + "<th>EDAD</th>" 
    + "<th>NOMBRE</th>"
    +"</tr>";
    let elementoPersonas
    for(let i=0; i<personas.length;i++){
        elementoPersonas=personas[i];
        contenidoTabla+=
        "<tr><td>"+ elementoPersonas.edad +"</td>"
        + "<td>"+ elementoPersonas.nombre + "</td>" 
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

encontrarMayor=function(){
    let personaMayor = personas[0];
    let elementoPersona;
    for(i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        if(elementoPersona.edad>personaMayor.edad){
            personaMayor = elementoPersona;
        }
    }
    return personaMayor;
}
encontrarMenor=function(){
    let personaMenor = personas[0];
    let elementoPersona;
    for(i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        if(elementoPersona.edad<personaMenor.edad){
            personaMenor = elementoPersona;
        }
    }
    return personaMenor;
}
determinarMayor=function(){
    let mayor = encontrarMayor();
    mostrarTexto('lblMayor', "La persona mayor es: "+mayor.nombre+" de edad "+mayor.edad);

}
determinarMenor=function(){
    let menor = encontrarMenor();
    mostrarTexto('lblmenor', "La persona menor es: "+menor.nombre+" de edad "+menor.edad);

}