/*
Al ingresar una edad debemos informar 
si la persona es mayor de edad, sino 
informar que es un menor de edad.

ENTREGADO
*/

function mostrar()
{//txtIdEdad 
	let edadIngresada;
	
	edadIngresada= document.getElementById ("txtIdEdad").value;
	edadIngresada = parseInt (edadIngresada);
	/*
	if (edadIngresada >= 18) 
	{
		alert ("La persona es mayor de edad");	
	}

	if (edadIngresada < 18)
	{
		alert ("La persona es menor de edad");
	}
	para estos casos, en realidad se utiliza "Else", 
	porque asi se optimiza el trabajo a realizar por la computadora.
	Else "si el if no se cumple, hace lo siguiente..."
	"Else" no lleva condicion, ya que ya se especificó en el if
	*/
	if (edadIngresada >= 18) 
	{
		alert ("La persona es mayor de edad.");
	}
	else 
	{
		alert ("La persona es menor de edad.");
	}
}//FIN DE LA FUNCIÓN