/*
Al ingresar una edad debemos informar 
adulto mayor 65
si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años).
menor de 2 bebe

ENTREGADO
*/
function mostrar()
{
	let edadIngresada;

	edadIngresada= document.getElementById ("txtIdEdad").value;
	edadIngresada = parseInt (edadIngresada);

	if (edadIngresada >= 65) {

		alert ("La persona es un(a) adulto/a mayor.");
	}
	else 
	{	if (edadIngresada >= 18 && edadIngresada < 65) {

			alert ("La persona es mayor de edad.");
		}
		else {
			if (edadIngresada >=13 && edadIngresada <= 17) {

			alert ("La persona es adolescente.");
			}

		 	else {
				if (edadIngresada < 13 && edadIngresada > 2){

					alert ("La persona es un(a) niño/a.");

				}
				else {
					alert ("La persona es bebé");
				}
			}

		}

		
	}

}//FIN DE LA FUNCIÓN

/*
recomendado:

if () {

}
else {
	if (){

	}
	else {

	}
}
*/