function mostrar()
{	let numeroIngresado;
	let contadorDivisores

	numeroIngresado = prompt ("Ingrese un número");
	numeroIngresado = parseInt (numeroIngresado);

	contadorDivisores = 0;

	for (let i = 0; i <= numeroIngresado ; i ++){
		if (numeroIngresado % i == 0){
			contadorDivisores ++ ;
		}
	}

	if (contadorDivisores == 2){
		alert (numeroIngresado + " es un numero primo.");
	}
	else {
		alert (numeroIngresado + " no es un numero primo.");
	}

	

}//FIN DE LA FUNCIÓN