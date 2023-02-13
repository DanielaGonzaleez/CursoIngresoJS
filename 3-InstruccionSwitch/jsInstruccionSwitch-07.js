/*
Al selecionar un destino , indicar 
el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	let destinoIngresado 
	destinoIngresado= document.getElementById ("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "Bariloche se encuentra en el Oeste de Argentina";
			break;

		case "Ushuaia":
			mensaje = "Ushuaia se encuentra en el Sur de Argentina";
			break;

		case "Cataratas":
			mensaje= "Cataratas se encuentra en el Norte de Argentina";
			break;
		default:
			mensaje= "Mar del plata se encuentra en el Este de Argetina";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN