function mostrar()
{	let numeroIngresado;

	numeroIngresado = prompt ("Ingrese un numero");
	numeroIngresado = parseInt (numeroIngresado);
	
	// forma mas simple
	
	for (let i = 1 ; i <= numeroIngresado ; i++ ) {

		if (i % 2 == 0) {

			document.write (i + "-");
		}
	}

	/* 
	for (let i = 0 ; i <= numeroIngresado ; i = i+2){

		if (i == 0){

			continue;

			para que no muestre el 0
		}

		document.write (i + " - ");

	}
	*/
}//FIN DE LA FUNCIÓN