
/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar()
{
	let contador = 0;
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumuladorAlcohol =0;
	let acumuladorBarbijo=0;
	let acumuladorJabon=0;
	let contadorBarbijo =0;
	let contadorAlcohol=0;
	let contadorJabon =0;
	let primerJabon= true;
	let JabonCaro;
	let unidadesJabonCaro;
	let fabricanteJabonCaro;
	let promedioPorCompra;

	while (contador<5){
		do {
			tipo = prompt ("Ingrese el tipo de producto (barbijo, jabon o alcohol)");

		}while (tipo!= "barbijo" && tipo!= "alcohol" && tipo!= "jabon" );

		do {
			precio = prompt ("Ingrese el precio (entre 100 y 300)");
			precio = parseInt (precio);

		}while (isNaN (precio) || precio <100 || precio >300);

		do {
			cantidad = prompt ("Ingrese la cantidad (entre 1 y 1000)");
			cantidad = parseInt (cantidad);

		}while (isNaN (cantidad) || cantidad < 1|| cantidad >1000);


		marca = prompt ("Ingrese la marca del producto");

		fabricante = prompt ("Ingrese el fabricante del producto");

		switch (tipo) {
			case "jabon":
				 if (primerJabon){
					JabonCaro = precio;
					unidadesJabonCaro = cantidad;
					fabricanteJabonCaro = fabricante;

					primerJabon = false;
				 }
				 else {
					if (JabonCaro < precio){
						JabonCaro = precio;
						unidadesJabonCaro = cantidad;
						fabricanteJabonCaro = fabricante;
					}
				 }

				contadorJabon ++
				acumuladorJabon = acumuladorJabon + cantidad;
				break;
			
				case "barbijo":
					contadorBarbijo ++
					acumuladorBarbijo = acumuladorBarbijo + cantidad;
					break;

				default:
					// punto C
					contadorAlcohol ++
					acumuladorAlcohol = acumuladorAlcohol + cantidad
					break;
		}
		
		contador ++;
	}

	if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
		
		promedioPorCompra = acumuladorAlcohol / contadorAlcohol;

	}
	else {
		if (acumuladorBarbijo>acumuladorJabon){
			
			promedioPorCompra = acumuladorBarbijo / contadorBarbijo;
		}
		else {
		
			promedioPorCompra = acumuladorJabon / contadorJabon;
		}
	}

	/*a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	c) Cuántas unidades de Barbijos se compraron en total*/

	document.write("El mas caro de los jabones es fabricado por "+ fabricanteJabonCaro + " y se compraron " + unidadesJabonCaro + 
	" unidades. <br> El promedio por compra del producto con mas unidades es " + promedioPorCompra + "<br> Las unidades de barbijo que se compraron en total fueron " + acumuladorBarbijo);
}
