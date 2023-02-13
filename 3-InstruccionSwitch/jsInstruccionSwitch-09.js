/*
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20%
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;
	let porcentaje;
	let precioFinal;

	estacionIngresada= document.getElementById ("txtIdEstacion").value;
	destinoIngresado = document.getElementById ("txtIdDestino").value;
	precioBase= 15000

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = 1.2
					break;
				case "Mar del plata":
					porcentaje = 0.8
					break;
				default:
					porcentaje = 0.9
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = 0.8
					break;
				case "Mar del plata":
					porcentaje = 1.2
					break;
				default:
					porcentaje = 1.1
					break;
			}
			break;
		
		default: 
			switch (destinoIngresado) {
				case "Cordoba":
					porcentaje = 1
					break;
			
				default:
					porcentaje = 1.1
					break;
			}
		
			
	}

	precioFinal = precioBase * porcentaje

	alert("Su viaje costará $" + precioFinal);

}//FIN DE LA FUNCIÓN