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

contadorIntentos = 0;

function comenzar()
{
  numeroSecreto = Math.round (Math.random ()* 100 + 1);
  contadorIntentos = 0;
  
  alert ("El juego ha comenzado, ingrese un numero y presione el boton de verificar para ver si es correcto");
  
}

function verificar()
{
  let numeroIngresado;

  numeroIngresado = document.getElementById ("txtIdNumero").value;
  numeroIngresado = parseInt (numeroIngresado);


  while (isNaN (numeroIngresado)){
    alert ("Error, ingrese un número");
    return;
  }
  while (numeroIngresado <0 || numeroIngresado >100){
    alert ("Ingrese un número válido");
    return;
  }
  
  if (numeroIngresado > numeroSecreto) {
    alert ("Se pasó...");
    contadorIntentos = contadorIntentos + 1
  }
  else {
    if (numeroIngresado < numeroSecreto){
      alert ("Falta...");
      contadorIntentos = contadorIntentos + 1
    }
    else {
      contadorIntentos = contadorIntentos + 1
      alert ("Usted es ganador!!! Y en solo " + contadorIntentos + " intentos");
    }  
  }


  document.getElementById("txtIdIntentos").value = contadorIntentos;

  }