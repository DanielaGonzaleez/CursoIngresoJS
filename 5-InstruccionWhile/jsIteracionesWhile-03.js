/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese la clave.");

	while (claveIngresada != "utn750") {
		
		alert ("la clave es incorrecta");

		claveIngresada =prompt("ingrese la clave.");
	}

	alert ("La clave es correcta");
}//FIN DE LA FUNCIÓN
