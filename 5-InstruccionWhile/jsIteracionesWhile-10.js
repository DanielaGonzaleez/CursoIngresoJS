/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorCeros;
	let contadorPares;
	let resto;
	let promedioPositivos;
	let promedioNegativos
	let diferencia;

	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	do {
		do {
			numeroIngresado = prompt ("ingrese un número");
			numeroIngresado = parseInt (numeroIngresado);
		} while (isNaN (numeroIngresado));

		if (numeroIngresado <0) {
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;
		}
		else {
			if (numeroIngresado == 0) {
				contadorCeros = contadorCeros + 1
			}
			else {
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos = contadorPositivos +1
				
				
			}
		}
		resto = numeroIngresado % 2
		if (numeroIngresado != 0 && resto == 0) {
			contadorPares = contadorPares + 1
		}

		respuesta = confirm ("¿Desea continuar?");

	} while (respuesta);

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es :" + sumaNegativos + "; la suma de los positivos es: " + sumaPositivos + 
	";. Usted ingresó " + contadorPositivos + " números positivos, " + contadorNegativos +" números negativos y " + contadorCeros + " ceros. " + 
	"El promedio de números negativos es: " + promedioNegativos + " y el de números positivos es: " + promedioPositivos + 
	". Por último, la diferencia entre numeros positivos y numeros negativos es " + diferencia + ".");

	//document.writeln o <br/> para no escribir en una sola linea.
	

}//FIN DE LA FUNCIÓN