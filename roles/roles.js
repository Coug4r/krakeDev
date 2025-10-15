let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0915622729",nombre:"Rafael",apellido:"Correa",sueldo:200.0,}
]
let esNuevo = false;
mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarCajas();

}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol")
    ocultarComponente("divEmpleado");
}
mostrarEmpleados=function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table> <tr>"
    + "<th>CEDULA</th>" 
    + "<th>NOMBRE</th>"
    + "<th>APELLIDO</th>"
    + "<th>SUELDO</th>"
    +"</tr>";
    let elementoEmpleados;
    for(let i=0; i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        contenidoTabla+=
        "<tr><td>"+ elementoEmpleados.cedula +"</td>"
        + "<td>"+ elementoEmpleados.nombre + "</td>" 
        + "<td>"+ elementoEmpleados.apellido + "</td>"
        + "<td>"+ elementoEmpleados.sueldo + "</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}
ejecutarNuevo=function(){
    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")
    habilitarComponente("btnGuardar")
    esNuevo = true;
}
buscarEmpleado=function(cedula){
    let elementoEmpleados;
    for(let i=0; i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        if(elementoEmpleados.cedula == cedula){
            return elementoEmpleados;
        }
    }
    return null;
}
agregarEmpleado=function(empleado){
    let cedulaNueva = empleado.cedula
    if(buscarEmpleado(cedulaNueva) == null){
        empleados.push(empleado);
        return true;
    }else{
        return false;
    }

}
guardar=function(){
    let valides = true;
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    if(esDigito(valorCedula)==false || valorCedula.length != 10){
        mostrarTexto('lblErrorCedula', "Solo se permiten 10 digitos exactos");
        valides = false;
    }
    if(esMayuscula(valorNombre)==false || valorNombre.length < 3){
        mostrarTexto('lblErrorNombre', "Solo se permiten mas de 3 mayusculas");
        valides = false;
    }
    if(esMayuscula(valorApellido)==false || valorApellido.length < 3){
        mostrarTexto('lblErrorApellido', "Solo se permiten mas de 3 mayusculas");
        valides = false;
    }
    if(valorSueldo <= 400 || valorSueldo >= 5000){
        mostrarTexto('lblErrorSueldo', "Solo se permiten valores entre 400 y 5000");
        valides = false;
    }
    if(valides == true){
        if(esNuevo == true){
            let empleado = {};
            empleado.cedula=valorCedula;
            empleado.nombre=valorNombre;
            empleado.apellido=valorApellido;
            empleado.sueldo=valorSueldo;
            let resultado = agregarEmpleado(empleado);
            if(resultado == true){
                alert("Empleado guardado correctamente!")
                mostrarEmpleados();
                deshabilitarCajas();
            }else{
                alert("Ya existe un empleado con la cedula: "+ valorCedula);
            }
        }
    }
}