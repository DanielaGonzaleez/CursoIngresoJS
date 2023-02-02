/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//txtIdNumeroUno; txtIdNumeroDos
	let numero1;
	let numero2;
	let resultado;

	numero1= document.getElementById("txtIdNumeroUno").value;
	numero2= document.getElementById("txtIdNumeroDos").value;

	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2= parseInt (document.getElementById("txtIdNumeroDos").value);
	resultado= numero1 + numero2;

	alert("La suma es: " + resultado);
	//terminar despues
}

function restar()
{let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt (document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt (document.getElementById("txtIdNumeroDos").value);
	resultado = numero1 - numero2;

	alert ("La resta es: " + resultado);
}

function multiplicar()
{ let numero1;
	let numero2;
	let resultado;

	numero1= document.getElementById("txtIdNumeroUno").value;
	numero2= document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt (document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt (document.getElementById("txtIdNumeroDos").value);
	resultado= numero1 * numero2

	alert ("La multiplicación es: " + resultado)
	
}

function dividir()
{let numero1;
	let numero2;
	let resultado;

	numero1= document.getElementById("txtIdNumeroUno").value;
	numero2= document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt (document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt (document.getElementById("txtIdNumeroDos").value);
	resultado= numero1 / numero2

	alert ("La división es: " + resultado)
}

