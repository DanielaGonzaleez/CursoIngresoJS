/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

function comenzar()
{  
    eleccionMaquina = Math.round (Math.random ()*3 + 1);

}//FIN DE LA FUNCIÓN
function piedra()
{ 
    switch (eleccionMaquina) {
    case 1:
        alert ("Empató");
        break;

    case 2:
        alert ("Perdió");
        break;
    default :
        alert ("Ganó");
    }
	comenzar ()

}//FIN DE LA FUNCIÓN
function papel()
{   switch (eleccionMaquina){
        case 1:
            alert("Ganó");
            break;
        case 2:
            alert ("Empató");
            break;
        default :
            alert ("Perdió");
    }
    comenzar ()

}//FIN DE LA FUNCIÓN
function tijera()
{   switch (eleccionMaquina){
        case 1:
            alert ("Perdió");
            break;
        case 2:
            alert ("Ganó");
            break;
        case 3:
            alert ("Empató");
            break;
    }
	
    comenzar ()
}//FIN DE LA FUNCIÓN