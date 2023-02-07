/*
Al ingresar una edad debemos informar 
solo si la persona es mayor de edad

ENTREGADO
*/

function mostrar()
{	// txtIdEdad 
	let edadIngresada;

	edadIngresada = document.getElementById ("txtIdEdad").value;
	edadIngresada= parseInt (edadIngresada);

	/* 
	>= significa "es mayor o igual a"
	> mayor a
	== igual a
	< menor a
	<= menor o igual a
	*/
	if (edadIngresada >= 18)
	{
		alert ("Usted es mayor de edad.");
	}
	

}//FIN DE LA FUNCIÓN