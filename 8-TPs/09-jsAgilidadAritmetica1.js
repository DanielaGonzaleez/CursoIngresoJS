/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let solucion;

function comenzar()
{   let primerNumero;
    let segundoNumero;
    let operador;
    
	primerNumero = Math.round ( Math. random () * 10 + 1);
    segundoNumero = Math.round (Math.random()*10 + 1);
    
    operador = Math.floor (Math.random () *4 + 1);

    switch (operador) {
        case 1:
            operador = "+" ;
            solucion = primerNumero + segundoNumero;
            break;

        case 2:
            operador = "-";
            solucion = primerNumero - segundoNumero;
            break;
        case 3:
            operador = "*";
            solucion = primerNumero * segundoNumero;
            break;
        case 4:
            operador = "/";
            solucion = primerNumero / segundoNumero;
            solucion = Math.floor (solucion);
            break;
    }

    document.getElementById("txtIdPrimerNumero").value = primerNumero;
    document.getElementById("txtIdOperador").value = operador;
    document.getElementById("txtIdSegundoNumero").value = segundoNumero;

} //FIN DE LA FUNCIÓN
function Responder()
{
	respuesta = document.getElementById("txtIdRespuesta").value;
    respuesta= parseInt (respuesta);

    if (respuesta == solucion) {
        alert ("El resultado es correcto.");
        comenzar ()
    }
    else {
        alert ("El resultado es incorrecto, intente otra vez");
    }


}//FIN DE LA FUNCIÓN
