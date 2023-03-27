/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let temperaturaMaxima;
	let hombresSolteros = 0;
	let hombresViudos = 0;
	let personaTemperaturaMaxima;
	let contadorTemperatura = 0;
	let acumuladorEdad =0;
	let promedioEdad;
	let mayoresViudos = 0;
	let primeraTemperatura = true;
	let respuesta

	do{
		do {
			nombre = prompt ("Ingrese su nombre");
		} while (! (isNaN(nombre)));

   	 	do {
			edad = prompt ("Ingrese su edad");
			edad = parseInt (edad)

		}  while (isNaN(edad));

		do {
			sexo = prompt ("Ingrese su sexo (f o m)");

		}while (sexo != "f" && sexo != "m")

		do {
			estadoCivil = prompt ("Ingrese su estado civil (soltero, casado o viudo)");

		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do {
			temperaturaCorporal = prompt ("Ingrese su temperatura corporal");
			temperaturaCorporal = parseInt (temperaturaCorporal);
		}while (isNaN(temperaturaCorporal));

		if (primeraTemperatura){
			temperaturaMaxima = temperaturaCorporal;
			personaTemperaturaMaxima = nombre;
			primeraTemperatura = false;
		}
		else {
			if (temperaturaMaxima < temperaturaCorporal){
				temperaturaMaxima = temperaturaCorporal;
				personaTemperaturaMaxima = nombre;
			}
		}
		if (edad >= 18 && estadoCivil == "viudo"){
			mayoresViudos ++
		}

		if (sexo == "m"){
			switch (estadoCivil){
				case "soltero" :
					hombresSolteros ++
					acumuladorEdad = acumuladorEdad + edad;
					break;
				case "viudo":
					hombresViudos ++
					break;
			}
		}

		promedioEdad = acumuladorEdad / hombresSolteros;

		if (edad >60 && temperaturaCorporal > 38){
			contadorTemperatura ++
		}

		respuesta = confirm ("Desea continuar?");
	} while (respuesta)

	/*a) El nombre de la persona con mas temperatura.
	b) Cuantos mayores de edad estan viudos
	c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre los hombres solteros.
	*/

	document.write ("La persona con mas temperatura fue " + personaTemperaturaMaxima + "<br/> La cantidad de mayores de edad viudos es " + mayoresViudos +
	"<br/> La cantidad de hombres solteros es " + hombresSolteros + " y la cantidad de hombres viudos es " + hombresViudos + 
	"<br> Hay " + contadorTemperatura + " personas de tercera edad con mas de 38º de temperatura <br> Por ultimo, el promedio de edad entre hombres solteros es "+ promedioEdad );
}
