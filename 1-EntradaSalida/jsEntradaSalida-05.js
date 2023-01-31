/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//txtIdNombre (caja 1); txtIdEdad (caja 2)

	// se declaran las variables
	let nombre;
	let edad;

	// se le asigna un valor a cada una de ellas, de acuerdo a lo que solicita la caja de texto
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
// se concatenan usando el signo "+" entre los textos y los valores
	alert ("Usted se llama " + nombre  +  " y tiene "  +  edad  +  " años");
}

