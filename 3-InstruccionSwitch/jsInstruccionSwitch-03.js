/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño 
	
	mesDelAño=document.getElementById ("txtIdMes").value;

	switch (mesDelAño) {

		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 días";
			break;
		
		default:
			mensaje= "Este mes tiene 30 o mas días";
	}
	
	alert(mensaje);
	

}//FIN DE LA FUNCIÓN

	