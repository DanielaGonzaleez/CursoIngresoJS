/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{   //txtIdImporte ; txtIdResultado
    let importe;
    let porcentaje;
    let resultado;

    importe = document.getElementById ("txtIdImporte").value;
    importe = parseInt (importe);

    porcentaje = importe * 0.25;

    resultado = importe - porcentaje;

    document.getElementById ("txtIdResultado").value = resultado;
}
