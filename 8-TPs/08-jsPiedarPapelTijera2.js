let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.round (Math.random ()*3 + 1);



}//FIN DE LA FUNCIÓN
function piedra()
{	switch (eleccionMaquina) {
		case 1:
			alert ("Empató");
			ContadorDeEmpates = ContadorDeEmpates + 1;
			break;

		case 2:
			alert ("Perdió");
			ContadorDePerdidas = ContadorDePerdidas + 1;
			break;
		default :
			alert ("Ganó");
			ContadorDeGanadas = ContadorDeGanadas + 1;
	}
	//Llamar a las funciones para que se ejecuten luego de terminar esta funcion
	mostrarResultado()
	comenzar()

}//FIN DE LA FUNCIÓN
function papel()
{	switch (eleccionMaquina){
        case 1:
            alert("Ganó");
			ContadorDeGanadas = ContadorDeGanadas + 1;
            break;
        case 2:
            alert ("Empató");
			ContadorDeEmpates = ContadorDeEmpates + 1;
            break;
        default :
            alert ("Perdió");
			ContadorDePerdidas = ContadorDePerdidas + 1;
	}
	mostrarResultado ()
	comenzar()
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina){
        case 1:
            alert ("Perdió");
			ContadorDePerdidas = ContadorDePerdidas + 1;
            break;
        case 2:
            alert ("Ganó");
			ContadorDeGanadas = ContadorDeGanadas + 1;
            break;
        default:
            alert ("Empató");
			ContadorDeEmpates = ContadorDeEmpates + 1;
    }
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value= ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value= ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value= ContadorDeEmpates;

}