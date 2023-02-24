/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
let numeroIngresado;
let contadorPares

function ComenzarIngreso () 
{   contadorPares = 0

    do {
        numeroIngresado = document.getElementById("txtIdNumero").value;
        numeroIngresado = parseInt (numeroIngresado);

        alert ("Ingrese un numero válido");

    }while ( numeroIngresado <0 || isNaN (numeroIngresado));
}
function NumerosPares()
{
    for (numeroIngresado ; numeroIngresado == 0 ; numeroIngresado --){

        if (numeroIngresado % 2 == 0){
            contadorPares ++ ;
        }
    }

    alert ("Hay " + contadorPares + " numeros pares desde el " + numeroIngresado + " hasta el 0.");
}