/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{   //txtIdSueldo
    let sueldo;
    let porcentaje;
    let aumento;

    sueldo= document.getElementById("txtIdSueldo").value;
    sueldo = parseInt (sueldo);

    porcentaje = sueldo * 0.1;

    aumento = sueldo + porcentaje;

    document.getElementById("txtIdResultado").value = aumento;

}
