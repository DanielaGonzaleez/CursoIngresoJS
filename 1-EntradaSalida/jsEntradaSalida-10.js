/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{//txtIdImporte  ;  txtIdResultado
    let importe;
    let descuento;
    let nuevoImporte;

    importe = document.getElementById ("txtIdImporte").value;
    importe = parseInt (importe);

    descuento = importe / 100 * 25;
    nuevoImporte = importe - descuento;

    document.getElementById ("txtIdResultado").value = nuevoImporte;
}
