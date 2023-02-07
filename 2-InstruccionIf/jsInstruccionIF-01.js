/*Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita".

ENTREGADO
*/

function mostrar()
{
	//tomo la edad
	let edadIngresada;
	
	edadIngresada = document.getElementById ("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	// edad "15" == 15 verdadero en JS, puede funcionar pero no es lo correcto
	if(edadIngresada == 15)
	{

		alert ("Niña bonita.");

	}


}//FIN DE LA FUNCIÓN

// txtIdEdad
/*
	if ()
	{

	}

	if (condicion) (sin ;, ya que se cierra la linea) si la edad ingresada es 15
	{ muestro niña bonita


	}

	si la edad ingresada es igual a 15
	if(edadIngresada == 15)

	operador de comparación:
	== es igual a (operador binario, solo se comparan 2 cosas)


*/