/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{//txtIdImporte  ;  txtIdResultado
	let importe;
	let descuento;
	let resultado;

	importe= document.getElementById("txtIdImporte").value;
	importe= parseInt (document.getElementById("txtIdImporte").value);

	descuento= importe / 100 * 25;
	descuento = parseInt(importe / 100 * 25);

	resultado= importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}
