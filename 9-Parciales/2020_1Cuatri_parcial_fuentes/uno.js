/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/
function mostrar()
{	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let alcoholBarato;
	let unidadesAlcoholBarato;
	let fabricanteAlcoholBarato;
	let tipoMasunidades;
	let promedioPorCompra;
	let contador = 0;
	let primerAlcohol = true;
	let acumuladorAlcohol = 0;
	let acumuladorJabon = 0;
	let acumuladorBarbijo =0;
	let contadorAlcohol = 0;
	let contadorJabon = 0;
	let contadorBarbijo = 0;

	while (contador<5){
		contador++
		do {
			tipo = prompt ("Ingrese el tipo de producto (barbijo, jabon o alcohol");

		}while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		
		do {
			precio = prompt ("Ingrese el pecio (entre 100 y 300)");
			precio = parseInt (precio);
		} while ((precio <100 || precio >300) || isNaN(precio));

		do {
			cantidad = prompt ("Ingrese la cantidad (entre 1 y 1000)");
			cantidad = parseInt (cantidad);
		} while ((cantidad <1 || cantidad> 1000) || isNaN(cantidad));

		marca = prompt ("Ingrese la marca");
		fabricante = prompt ("Ingrese el fabricante");

		switch (tipo) {
			case "alcohol":
				// Punto A
				if (primerAlcohol){
					alcoholBarato = precio;
					unidadesAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante

					primerAlcohol = false;
				}
				else {
					if (precio < alcoholBarato){
						alcoholBarato = precio;
						unidadesAlcoholBarato = cantidad;
						fabricanteAlcoholBarato = fabricante
					}
				}

				contadorAlcohol ++
				acumuladorAlcohol = acumuladorAlcohol + cantidad;
				break;
			
				case "barbijo":
					contadorBarbijo ++
					acumuladorBarbijo = acumuladorBarbijo + cantidad;
					break;

				default:
					// punto C
					contadorJabon ++
					acumuladorJabon = acumuladorJabon + cantidad
					break;
		}
	}

	if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
		tipoMasunidades = "Alcohol";
		promedioPorCompra = acumuladorAlcohol / contadorAlcohol;
	}
	else {
		if (acumuladorBarbijo > acumuladorJabon){
			tipoMasunidades = "Barbijo";
			promedioPorCompra = acumuladorBarbijo / contadorBarbijo;
		}
		else {
			tipoMasunidades = "Jabon";
			promedioPorCompra = acumuladorJabon / contadorJabon;
		}
	}

	/*a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	b) Del tipo con mas unidades, el promedio por compra
	c) Cuántas unidades de jabones hay en total */

	document.write ("El alcohol mas barato fue del fabricante " + fabricanteAlcoholBarato + " y se ingresó la cantidad de " + unidadesAlcoholBarato +
	"<br> El tipo con mas unidades fue el " + tipoMasunidades + " y el promedio por compra fue " + promedioPorCompra + 
	"<br> La unidades de jabon que hay en total son " + acumuladorJabon);
}
