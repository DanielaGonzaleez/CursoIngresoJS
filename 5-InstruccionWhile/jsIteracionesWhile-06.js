function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador <5) {
		numeroIngresado = prompt ("ingrese un número");
		numeroIngresado = parseInt (numeroIngresado);
		
		// isNan: por si pone una palabra en vez de un numero, que da NaN
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt ("Error! Ingrese un número");
			numeroIngresado = parseInt (numeroIngresado);
		}
		
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}
	
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById ("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN