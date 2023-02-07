/*
Al ingresar una edad solo debemos informar
 si la persona NO es adolescente.

 ENTREGADO
*/
function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById ("txtIdEdad").value;
	edadIngresada = parseInt (edadIngresada);

	if (edadIngresada < 13 || edadIngresada > 17) {

		alert ("La persona no es adolescente.");
	}

}//FIN DE LA FUNCIÓN