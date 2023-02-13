/*

*/
function mostrar()
{
	let nota;

	nota = Math.round (Math.random () *10 + 1);

	if (nota == 9 || nota == 10) {

		alert ("La nota del examen es: " + nota + "; EXCELENTE");
	}
	else {
		if (nota > 4) {

			alert ("La nota del examen es: " + nota + "; APROBÓ");
		}
		else {
			
			alert ("La nota del examen es: " + nota + "; vamos, la proxima se puede");
		}
	 

		
	}

}//FIN DE LA FUNCIÓN