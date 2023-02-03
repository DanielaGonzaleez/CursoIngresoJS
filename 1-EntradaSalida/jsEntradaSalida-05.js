/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//txtIdNombre;  txtIdEdad

	let nombreIngresado;
	let edadIngresada;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById ("txtIdEdad").value;

	alert ("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.");
}


