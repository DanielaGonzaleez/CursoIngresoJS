/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta == "si") {
		numeroIngresado = prompt ("ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);
		acumulador = acumulador + numeroIngresado;

		respuesta = prompt ("¿Desea ingresar otro numero");
		contador = contador + 1
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN