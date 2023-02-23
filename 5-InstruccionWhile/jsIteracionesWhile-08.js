/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	let existenNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	// respuesta='si'; usando el "do while" no es necesario inicializarla

	// con el "do while", el código se ejecuta al menos una vez, conviene para validar
	do {
		do {
			numeroIngresado = prompt ("Por favor, ingrese un número");
			numeroIngresado = parseInt (numeroIngresado);
		}while (isNaN(numeroIngresado));

		if (numeroIngresado >= 0){
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			existenNegativos = true;
		}

		respuesta = confirm ("Desea continuar?");
	} while (respuesta);

	if (existenNegativos){
		document.getElementById("txtIdProducto").value=multiplicacionNegativos;
	}
	else {
		document.getElementById("txtIdProducto").value= "No ingreso números negativos";
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;


	/*
	while (respuesta == "si") {
		//numeroIngresado = prompt ("Ingrese un numero");
		//numeroIngresado = parseInt(numeroIngresado);

		Si la variable no tiene valor, entra al isNaN, 
		por lo tanto no hace falta poner el numero al principio
		

		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt ("Error! Por favor, ingrese un número");
			numeroIngresado = parseInt (numeroIngresado);
		}

		if (numeroIngresado <0){
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		respuesta = prompt ("¿Desea ingresar otro número? (Responda si o no)");
	}
	*/


}//FIN DE LA FUNCIÓN