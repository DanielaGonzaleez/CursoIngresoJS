/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{//aca se declara la variable
	let nombreIngresado;
	//... se toma el valor por prompt
	nombreIngresado = prompt ("ingrese su nombre aqui");
	//... y se muestra por "Id"
	document.getElementById ("txtIdNombre").value = nombreIngresado
	




}

//txtIdNombre 