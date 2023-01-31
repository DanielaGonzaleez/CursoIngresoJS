/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{//txtIdNumeroUno (caja 1); txtIdNumeroDos (caja 2)
//declaro variables
	let numero1;
	let numero2;
//asigno el valor de la caja de texto
	numero1 = document.getElementById("txtIdNumeroUno").value
	numero2 = document.getElementById("txtIdNumeroDos").value
// paso de texto a nùmero. Ej: de "2" a 2
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
//muestro el resultado
	alert ("El resultado es " + (numero1 + numero2));
}

