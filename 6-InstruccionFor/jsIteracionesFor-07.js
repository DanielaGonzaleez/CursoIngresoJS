function mostrar()
{
	let numeroIngresado;
	let contadorDivisores;

	numeroIngresado = prompt ("ingrese un numero");
	numeroIngresado = parseInt (numeroIngresado);

	contadorDivisores = 0;

	for (let i=1; i<= numeroIngresado; i++){

		if (numeroIngresado % i == 0){

			contadorDivisores ++ ;
		}
	}

	alert (contadorDivisores + " numeros divisores encontrados");

}//FIN DE LA FUNCIÓN