function mostrar()
{
	let destinoIngresado 
	let mensaje;

	destinoIngresado= document.getElementById ("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "En el destino elegido hace frío."
			break;
		
		case "Mar del plata":
		case "Cataratas":
			mensaje = "En el destino elegido hace calor"
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN