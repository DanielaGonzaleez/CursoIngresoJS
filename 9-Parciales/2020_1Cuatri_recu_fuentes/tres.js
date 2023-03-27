/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar()
{	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta
	let primerTemperatura = true;
	let masTemperatura;
	let nacionalidadMasTemperatura;
	let mayoresSolteros = 0;
	let mujeresSolteras =0;
	let mujeresViudas=0;
	let acumuladorEdadCasadas = 0;
	let contadorCasadas = 0;
	let contadorEdadYTemperatura=0;
	let promedioEdadCasadas;

	do {

		do {
			nombre = prompt ("Ingrese su nombre");
		} while (! (isNaN(nombre))|| nacionalidad ==""); // agregado dsp el ""

		do {
			nacionalidad = prompt ("Ingrese su nacionalidad");
		} while (! (isNaN(nacionalidad))|| nacionalidad == ""); // agregado dsp el ""

		do {
			edad = prompt ("Ingrese su edad");
			edad = parseInt (edad);
		} while ( isNaN(edad) );

		do {
			sexo = prompt ("Ingrese su sexo (f o m)")
		
		}while (sexo!= "f" && sexo!= "m" );

		do {
			estadoCivil = prompt ("Ingrese su estado civil (soltero, casado o viudo)");
	  
		}while (estadoCivil != "casado" && estadoCivil!= "soltero" && estadoCivil!= "viudo" );

		do {
			temperaturaCorporal = prompt ("Ingrese su temperatura corporal");
			temperaturaCorporal = parseInt (temperaturaCorporal);
		} while ( isNaN(temperaturaCorporal) || (temperaturaCorporal <35 && temperaturaCorporal >44)); // rango agregado dsp.

		if (primerTemperatura){
			masTemperatura = temperaturaCorporal;
			nacionalidadMasTemperatura = nacionalidad;
			primerTemperatura = false;
		}
		else {
			if (masTemperatura < temperaturaCorporal){
				masTemperatura = temperaturaCorporal;
				nacionalidadMasTemperatura = nacionalidad;
			}
		}

		if (edad > 17 && estadoCivil == "soltero"){
			mayoresSolteros ++
		}

		// se pone la f dentro de cada case asi puedo unificar con los mayores de 17 solteros.
		if (sexo == "f"){
			switch (estadoCivil){
				case "soltero" :
					mujeresSolteras ++
					break;
				case "viudo":
					mujeresViudas ++
					break;
				default :
					acumuladorEdadCasadas = acumuladorEdadCasadas + edad;
					contadorCasadas ++
			}
		}

		promedioEdadCasadas = acumuladorEdadCasadas / contadorCasadas;

		if (edad >60 && temperaturaCorporal >38){
			contadorEdadYTemperatura = contadorEdadYTemperatura + 1;
		}

		respuesta= confirm ("Desea seguir ingresando?");
	}while (respuesta);


	/*a) la Nacionalidad de la persona con mas temperatura.
	b) Cuantos mayores de edad( más de 17) estan solteros
	c) La cantidad de Mujeres que hay solteras o viudas.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre las mujeres casadas.
	*/

	document.write ("La nacionalidad de la persona con mas temperatura es " + nacionalidadMasTemperatura + "<br> Hay " + mayoresSolteros + " mayores de edad solteros <br>" + 
	"Hay " + mujeresSolteras +" mujeres solteras y " + mujeresViudas + " viudas <br> " + contadorEdadYTemperatura + " personas de la tercera edad tienen mas de 38 de temperatura" +
	"<br> El promedio de edad entre las mujeres casadas es " + promedioEdadCasadas);
	
}
