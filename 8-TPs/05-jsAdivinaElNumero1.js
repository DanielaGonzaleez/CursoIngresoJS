/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;

function comenzar()
{
  numeroSecreto = Math.round (Math.random ()* 100 + 1);

  //para probar si funciona
  alert (numeroSecreto);
}

function verificar()
{
  let numeroIngresado;

  numeroIngresado = document.getElementById ("txtIdNumero").value;
  numeroIngresado = parseInt (numeroIngresado);

  contadorIntentos = 0;

  while (isNaN (numeroIngresado)){
    alert ("Error, ingrese un número");
  }

  while (numeroIngresado != numeroSecreto) {
    if (numeroIngresado > numeroSecreto) {
      alert ("Se pasó...");
      contadorIntentos = contadorIntentos + 1
      break;
    }
    else {
      alert ("Falta...");
      contadorIntentos = contadorIntentos + 1
      break;
    }
    
  }

  if (numeroIngresado == numeroSecreto){
    contadorIntentos = contadorIntentos + 1
    alert ("Usted es ganador!!! Y en solo " + contadorIntentos + " intentos");
  }


	
	
}