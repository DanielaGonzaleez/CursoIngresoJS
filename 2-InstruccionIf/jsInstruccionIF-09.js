/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{	/*math floor: redondea para abajo
	math.round: redondea para abajo si es .4 o para arriba si es .5
	math.ceil: redondea para arriba
	*/
	alert (Math.round (Math.random () * 10 + 1));
}//FIN DE LA FUNCIÓN