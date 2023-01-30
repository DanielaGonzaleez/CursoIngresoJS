/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{ 
	//alert("ok"); se le asigna un valor a "let" y luego se expone con "alert"
	// var edad; (no se utiliza, es preferible "let")
	let nombre;
	let nombreCompleto // Notacion Lower Camel Case, para leer mejor cuando son dos palabras
	/* siempre asignar un nombre que se corresponda con su contenido, para que recordemos que guardamos
	";" indica el fin de una linea, en JS se necesita obligatoriamente
	*/
	//nombre= "Daniela";  asignaciòn de string "=" es el operador de asignaciòn
	//si asigno un nuevo valor aqui abajo, pisa el valor anterior
	
	/* para tomar con prompt*/ nombre = prompt("ingrese su nombre");
	alert (nombre);
}

