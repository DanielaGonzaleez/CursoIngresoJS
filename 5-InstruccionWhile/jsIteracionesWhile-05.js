/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") {

		alert ("La respuesta no es válida");
		sexoIngresado = prompt("ingrese f ó m .");

	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN