/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	do { 
		edadIngresada = prompt ("Ingrese una edad entre 18 y 90 años (escrito con numeros)");
		edadIngresada = parseInt (edadIngresada);
	} while (edadIngresada <18 || edadIngresada >90 || isNaN (edadIngresada));

	document.getElementById ("txtIdEdad").value = edadIngresada;

	do {
		sexoIngresado = prompt ("ingrese un sexo: F o M (con letra mayúscula)");
	} while (sexoIngresado != "F" && sexoIngresado != "M");

	if (sexoIngresado = "F"){
		sexoIngresado = "Femenino";
	}
	else {
		sexoIngresado = "Masculino";
	}

	document.getElementById ("txtIdSexo").value = sexoIngresado;

	do {
	estadoCivilIngresado = prompt ("Ingrese el numero correspondiente a su estado civil estado civil: 1- Soltero/a; 2- Casado/a; 3- Divorciado/a; 4- Viudo/a");
	estadoCivilIngresado = parseInt (estadoCivilIngresado);
	} while (estadoCivilIngresado <1 || estadoCivilIngresado >4 || isNaN (estadoCivilIngresado));

	switch (estadoCivilIngresado){
		case 1:
			estadoCivilIngresado = "Soltero/a";
			break;
		case 2:
			estadoCivilIngresado = "Casado/a";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado/a";
			break;
		case 4:
			estadoCivilIngresado = "Viudo/a"
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;

	do {
		sueldoBrutoIngresado = prompt ("Ingrese su sueldo bruto (escrito con numeros), no menor a 8000");
		sueldoBrutoIngresado = parseInt (sueldoBrutoIngresado);
	} while (sueldoBrutoIngresado <8000 || isNaN (sueldoBrutoIngresado));

	document.getElementById("txtIdSueldo").value = sueldoBrutoIngresado;

	do {
		legajoIngresado = prompt ("Ingrese su número de legajo, sin ceros adelante, debe ser de 4 cifras");
		legajoIngresado = parseInt (legajoIngresado);
	} while (legajoIngresado < 1000 || isNaN (legajoIngresado));

	document.getElementById("txtIdLegajo").value = legajoIngresado;

	do {
		nacionalidadIngresada = prompt ("Ingrese su nacionallidad (Con letra mayúscula): A- Si es argentino/a; E- Si es extranjero/a; N- si es nacionalizado/a.")
	} while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N");

	switch(nacionalidadIngresada){
		case "A":
			nacionalidadIngresada = "Argentino/a";
			break;
		case "E":
			nacionalidadIngresada = "Extranjero/a";
			break;
		case "N":
			nacionalidadIngresada = "Nacionalizado/a";
			break;
	}

	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;

}
