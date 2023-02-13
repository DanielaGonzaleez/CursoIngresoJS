function mostrar()
{
	//tomo la hora
	let horaDelDia;
	let mensaje;

	horaDelDia = document.getElementById ("txtIdHora").value;
	horaDelDia = parseInt (horaDelDia)
	Math.round (horaDelDia)
	// para convertir por ejemplo las 7.30 en un numero entero, osea 7

	switch (horaDelDia) {
		case 7:

		case 8:

		case 9:

		case 10:

		case 11:
			mensaje = "Es de mañana.";
			break;
	
		default:
			mensaje = "No es de mañana.";
			break;
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN