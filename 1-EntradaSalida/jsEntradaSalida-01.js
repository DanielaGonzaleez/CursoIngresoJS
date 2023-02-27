/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*
Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*/
function mostrar()
{
	//Modelo de exámen.
	let bodegaElegida;
	let descripcion;
	let pesoProducto;
	let capacidadAvellaneda;
	let capacidadCaba;
	let capacidadLanus;
	let respuesta;

	capacidadAvellaneda = 20000;
	capacidadCaba= 25000;
	capacidadLanus = 15000;


	do {
		bodegaElegida= prompt ("Ingrese el la bodega en la cual desee depositar: Avellaneda, CABA, Lanus");

		while (bodegaElegida != "Avellaneda" && bodegaElegida != "CABA" && bodegaElegida != "Lanus"){
			bodegaElegida = prompt ("La bodega seleccionada no existe, por favor ingrese una respuesta válida.")
		}

		descripcion = prompt ("Ingrese una descripcion de su producto.");

		pesoProducto = prompt ("Ingrese el peso de su producto en kg.");

		switch (bodegaElegida){
			case "Avellaneda":
				if (capacidadAvellaneda < pesoProducto){
					bodegaElegida= prompt ("Lo sentimos, la bodega de Avellaneda no tiene capacidad disponible, elija otra (CABA o Lanus)");

					while (bodegaElegida != "CABA" && bodegaElegida != "Lanus") {
						bodegaElegida = prompt("Por favor ingrese una respuesta válida.");
					}
				}

				capacidadAvellaneda = capacidadAvellaneda - pesoProducto;
				
				break;
			case "CABA":
				if (capacidadCaba < pesoProducto){
					bodegaElegida= prompt ("Lo sentimos, la bodega de Avellaneda no tiene capacidad disponible, elija otra (Avellaneda o Lanus)");

					while (bodegaElegida != "Avellaneda" && bodegaElegida != "Lanus") {
						bodegaElegida = prompt("Por favor ingrese una respuesta válida.");
					}
				}

				capacidadCaba = capacidadCaba - pesoProducto;

				break;
			case "Lanus":
				if (capacidadLanus < pesoProducto){
					bodegaElegida= prompt ("Lo sentimos, la bodega de Avellaneda no tiene capacidad disponible, elija otra (CABA o Avellaneda)");

					while (bodegaElegida != "CABA" && bodegaElegida != "Avellaneda") {
						bodegaElegida = prompt("Por favor ingrese una respuesta válida.");
					}
				}

				capacidadLanus = capacidadLanus - pesoProducto;

				break;
		}

		respuesta= confirm ("¿Desea ingresar otro producto?");

	} while (respuesta);
	//alert ("Esto funciona de maravilla");
}

