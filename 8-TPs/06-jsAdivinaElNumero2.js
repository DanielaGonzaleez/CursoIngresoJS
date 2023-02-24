/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 

let contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round (Math.random () *100 + 1);
	contadorIntentos = 0;

	alert ("El juego ha comenzado, ingrese un numero y verifique si es correcto.");
}

function verificar()
{	let numeroIngresado;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado= parseInt (numeroIngresado);

	while (isNaN (numeroIngresado)) {
		alert ("Por favor, ingrese un numero.");
		return;
	}
	while (numeroIngresado <0 || numeroIngresado >100){
		alert ("Por favor, ingrese un numero dentro del rango solicitado.");
		return;
	}
	
	if (numeroIngresado < numeroSecreto) {

		alert ("Falta...");
		contadorIntentos = contadorIntentos + 1;
	}
	else {
		if (numeroIngresado > numeroSecreto) {
			alert ("Se pasó...");
			contadorIntentos = contadorIntentos + 1;
		}
		else {
			contadorIntentos = contadorIntentos + 1
			switch (contadorIntentos) {
				case 1:
					mensaje =" usted es Psíquico";
					break;
			
				case 2:
					mensaje = " excelente percepción";
					break;
				case 3:
					mensaje = " esto es suerte";
					break;
				case 4:
					mensaje = " excelente técnica";
					break;
				case 5:
					mensaje = " usted está en la media";
					break;
				default:
					if (contadorIntentos >= 6 && contadorIntentos <=10){
						mensaje =" falta técnica";
					}
					else {
						mensaje = " afortunado en el amor";
					}
			}

			alert ("Ha ganado en " + contadorIntentos + " intentos, " + mensaje);
		}	
	}	

	document.getElementById("txtIdIntentos").value = contadorIntentos;
}