/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero= true;

	do {
		do {
			numeroIngresado = prompt ("Ingrese un número");
			numeroIngresado = parseInt (numeroIngresado);

		}while (isNaN(numeroIngresado));
 
		if (banderaDelPrimero == true) { //Solo la primera vez
			banderaDelPrimero = false

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else {
			// No es la primera vez
			// Max y Min tienen valor
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			}
			else {
				if (numeroIngresado < numeroMinimo) {
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta = confirm ("¿Desea continuar?");

	}while (respuesta);

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN