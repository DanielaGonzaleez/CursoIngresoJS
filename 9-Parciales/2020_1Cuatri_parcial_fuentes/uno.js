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
{	let contador;
	let producto;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let primerAlcohol;
	let alcoholBarato;
	let unidadesAlcoholBarato;
	let fabricanteAlcoholBarato;
	let tipoMasUnidades;
	let acumuladorJabon;
	let unidadesAlcohol;
	let unidadesJabon;
	let unidadesBarbijo;
	let cantidadCompraAlcohol;
	let cantidadCompraJabon;
	let cantidadCompraBarbijo;
	let promedioPorCompra;
	
	contador = 1;

	primerAlcohol = true;

	acumuladorJabon =0;

	unidadesAlcohol = 0;

	unidadesJabon = 0;

	unidadesBarbijo = 0;

	cantidadCompraAlcohol = 0;

	cantidadCompraJabon =0;

	cantidadCompraBarbijo = 0;

	while (contador <=5){
		producto = prompt("Ingrese el producto");

		while (producto != "barbijo" && producto != "jabon" && producto != "alcohol"){
			producto = prompt ("Ingrse un producto valido");
		}

		precio = prompt("Ingrese el precio del producto");
		precio = parseInt (precio);

		while (precio<100 || precio >300){
			precio = prompt ("Ingrese un precio válido (De 100 a 300)");
			precio = parseInt (precio);

		}

		while (isNaN (precio)){
			precio = prompt("Ingrese un precio");
			precio = parseInt (precio);

		}

		unidades = prompt("Ingrese la cantidad de producto");
		unidades = parseInt (unidades);

		while (unidades <1 || unidades >1000){
			unidades = prompt("Ingrese la cantidad de producto (Debe ser al menos 1 producto y 1000 como maximo)");
			unidades = parseInt (unidades);
		}

		while (isNaN (unidades)){
			unidades = prompt("Ingrese la cantidad de producto");
			unidades = parseInt (unidades);
		}


		marca= prompt ("Ingrese la marca");

		fabricante = prompt ("Ingrese el fabricante")

		contador ++

		
		switch (producto){
			case "alcohol":
				unidadesAlcohol = unidadesAlcohol +	 unidades;
				cantidadCompraAlcohol ++

				if (primerAlcohol){
					alcoholBarato = precio;
					unidadesAlcoholBarato = unidades;
					fabricanteAlcoholBarato = fabricante;
	
					primerAlcohol = false;
				}
				else {
					if (precio < alcoholBarato){
						alcoholBarato = precio;
						unidadesAlcoholBarato = unidades;
						fabricanteAlcoholBarato = fabricante;
					}
				}
			
				break;

			case "jabon":
				unidadesJabon = unidadesJabon + unidades;
				cantidadCompraJabon ++
				break;

			case "barbijo":
				unidadesBarbijo = unidadesBarbijo + unidades;
				cantidadCompraBarbijo ++
				break;

		}

	}

	if (unidadesAlcohol > unidadesBarbijo && unidadesAlcohol > unidadesJabon){
		tipoMasUnidades = "Alcohol";
		promedioPorCompra = unidadesAlcohol / cantidadCompraAlcohol;
	}
	else {
		if (unidadesJabon > unidadesAlcohol && unidadesJabon > unidadesBarbijo){
			tipoMasUnidades = "Jabon";
			promedioPorCompra = unidadesJabon / cantidadCompraJabon;
		}
		else {
			tipoMasUnidades = "Barbijo";
			promedioPorCompra = unidadesBarbijo / cantidadCompraBarbijo;
		}
	}
	
	document.write ("El alcohol mas barato salió $" + alcoholBarato + " y se compraron " + unidadesAlcoholBarato + " unidades, y el fabricante fue " + fabricanteAlcoholBarato + 
	"<br/> El tipo con mas unidades fue el " + tipoMasUnidades + " con un promedio de " + promedioPorCompra + " unidades por compra <br/> Las unidades de jabón que hay en total son " + unidadesJabon);

	
}
