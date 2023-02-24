function mostrar()
{
	let numeroIngresado
	for (;;){
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado)

		if (numeroIngresado == 9) {
			break;
		}

		console.log (numeroIngresado);
	}



}//FIN DE LA FUNCIÓN