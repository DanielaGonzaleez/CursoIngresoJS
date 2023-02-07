/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   // txtIdTemperatura
    // C = (F - 32) / 1.8
    let fahrenheit;
    let centigrados;

    fahrenheit = document.getElementById ("txtIdTemperatura").value;
    fahrenheit = parseInt (fahrenheit);

    centigrados = (fahrenheit - 32) / 1.8;

    alert ( fahrenheit + " Fahrenheit son " + centigrados + " centigrados.");

}

function CentigradosFahrenheit () 
{   // F = 9 / 5 * C + 32
    let centigrados;
    let fahrenheit;

    centigrados= document.getElementById ("txtIdTemperatura").value;
    centigrados = parseInt (centigrados);

    fahrenheit = 9 / 5 * centigrados + 32;

    alert (centigrados + " centígrados son " + fahrenheit + " Fahrenheit")
	
}
