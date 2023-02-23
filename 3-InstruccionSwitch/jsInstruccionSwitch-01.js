/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{	//txtIdMes

	let mesIngresado;
	let mensaje;

	mesIngresado = document.getElementById ("txtIdMes").value;

	switch (mesIngresado) {
		case "Enero":
			mensaje = "Que comiences bien el año!!!.";
			break;
		
		case "Marzo":
			mensaje = "A clases!!!.";
			break;

		case "Julio":
			mensaje = "Se vienen las vacaciones!!!.";
			break;
		
		case "Diciembre":
			mensaje = "Felices fiestas!!!.";
			break;

		default :
			mensaje = "No hay un mensaje para este mes, aguarde.";

	}

	alert (mensaje);


}//FIN DE LA FUNCIÓN