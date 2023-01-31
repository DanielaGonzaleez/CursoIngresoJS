/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{//opcion 1
	let nombreIngresado;
	/*nombreIngresado=txtIdtNombre.value;
	alert(nombreIngresado);

	txtIdNombre es el identificador de la caja de texto
*/
//opcion 2
nombreIngresado = document.getElementById("txtIdNombre").value;
alert (nombreIngresado);
}


