/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{//txtIdSueldo  ;  txtIdResultado
	let sueldo;
	let aumento;
	let resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt (document.getElementById("txtIdSueldo").value);

  aumento= sueldo / 100 * 10;
  aumento = parseInt (sueldo / 100 * 10)

resultado= sueldo + aumento
	document.getElementById("txtIdResultado").value = resultado;

}
