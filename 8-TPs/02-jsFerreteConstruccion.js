/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   // txtIdLargo ; txtIdAncho 
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = parseInt (document.getElementById("txtIdLargo").value);
    ancho = parseInt (document.getElementById ("txtIdAncho").value);
    perimetro = (ancho + largo) * 2;
    alambre = perimetro * 3

    alert ("Necesitara comprar " + alambre + " metros de alambre.")

}
function Circulo () 
{   // txtIdRadio
	let radio;
    let perimetro;
    let pi;
    let alambre;

    radio = document.getElementById ("txtIdRadio").value;
    radio = parseInt (radio);
    pi = 3.14;

    perimetro = pi * radio * 2;
    alambre = perimetro * 3;
    
    alert ("Se necesitara comprar " + alambre + " metros de alambre.");
}
function Materiales () 
{   let ancho;
    let largo;
    let area;
    let cal;
    let cemento;

    ancho = document.getElementById ("txtIdAncho").value;
    largo = document.getElementById ("txtIdLargo").value;

    ancho = parseInt(ancho);
    largo = parseInt(largo);
    area = ancho * largo;

    cal = area * 3;
    cemento = area * 2;
	
    alert ("Usted necesitara " + cal + " bolsas de cal y " + cemento + " bolsas de cemento.");
}