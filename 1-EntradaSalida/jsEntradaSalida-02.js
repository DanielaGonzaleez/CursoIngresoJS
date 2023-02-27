/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/

function mostrar()
{ 
	let nombreVendedor;
	let nombreComprador;
	let cantidadPasajes;
	let precioPaquete;
	let tipoAsiento;
	let tipoViaje;
	let tipoDestino;
	let numeroIngreso;
	let pesosPepepeposo;
	let pesosQuinoto;
	let pesosHuesos;
	let respuesta;
	let mayorRecaudo;
	let contadorNacional;
	let contadorInternacional;
	let promedioNacional;
	let promedioInternacional;
	let directoInternacional;

	numeroIngreso = 0;

	pesosPepepeposo = 0;

	pesosQuinoto = 0;

	pesosHuesos = 0;

	contadorInternacional = 0;

	contadorNacional = 0;

	directoInternacional = 0;

	do {

		nombreVendedor = prompt ("Seleccione el nombre de su vendedor");

		while (nombreVendedor != "Pepepeposo" && nombreVendedor != "Quinoto" && nombreVendedor != "Huesos") {
			nombreVendedor = prompt ("Error, ingrese un nombre válido.");
		}
	
		nombreComprador = prompt ("Ingrese el nombre del comprador");
	
		while (! (isNaN (parseInt (nombreComprador)))) {
			nombreComprador = prompt ("ingrese un nombre");
		}
	
		cantidadPasajes = prompt ("Ingrese la cantidad de pasajes");
		cantidadPasajes = parseInt (cantidadPasajes);
	
		while (cantidadPasajes <1 || cantidadPasajes >5){
			cantidadPasajes = prompt ("Ingrese una cantidad entre 1 y 5 pasajes");
		}
	
		precioPaquete = prompt ("Ingrese el precio de su paquete");
		precioPaquete = parseInt (precioPaquete);
	
		while (precioPaquete < 1000){
			precioPaquete = prompt ("El precio de su paquete debe estar entre 1000 y 5000");
		}
	
		switch (nombreVendedor){
			case "Pepepeposo":
				pesosPepepeposo = pesosPepepeposo + precioPaquete;
				break;
	
			case "Quinoto":
				pesosQuinoto = pesosQuinoto + precioPaquete;
				break;
			case "Huesos":
				pesosHuesos = pesosHuesos + precioPaquete;
				break;
		}
	
		tipoAsiento = prompt ("Ingrese su tipo de asiento (Clase economica, Clase ejecutiva, Primera clase)");
	
		while (tipoAsiento != "Clase economica" && tipoAsiento != "Clase ejecutiva" && tipoAsiento != "Primera clase"){
			tipoAsiento = prompt ("Ingrese una respuesta válida (Clase economica, Clase ejecutiva, Primera clase)");
		}
	
		switch (tipoAsiento){
			case "Calse ejecutiva":
				precioPaquete = precioPaquete * 1.20;
				break;
			case "Primera clase":
				precioPaquete = precioPaquete * 1.35;
				break;
		}
	
		tipoViaje = prompt ("Ingres el tipo de viaje (Directo o Con escala)");
	
		while (tipoViaje != "Directo" && tipoViaje != "Con escala") {
			tipoViaje = prompt ("Ingrese una respuesta válida (Directo o Con escala)");
		}
	
		tipoDestino = prompt ("Ingrese su destino (Nacional o Internacional)");
	
		while (tipoDestino != "Nacional" && tipoDestino != "Internacional"){
	
			tipoDestino = prompt ("ingrese un destino válido");
		}

		if (tipoDestino == "Internacional"){
			contadorInternacional ++
		}
		else {
			contadorNacional ++
		}
	
		numeroIngreso ++

		respuesta = confirm ("Dese ingresar otro viaje?");
	} while (respuesta)

	if (pesosPepepeposo > pesosHuesos && pesosPepepeposo > pesosQuinoto){
		mayorRecaudo = "Quien mas recaudó fue Pepepeposo, con $" + pesosPepepeposo;
	}
	else {
		if (pesosQuinoto > pesosPepepeposo && pesosQuinoto >  pesosHuesos){
			mayorRecaudo = "Quien mas recaudo fue Quinoto, con $" + pesosQuinoto;
		}
		else {
			if (pesosHuesos > pesosPepepeposo && pesosHuesos > pesosQuinoto){
				mayorRecaudo = "Quien mas recaudó fue Huesos, con $" + pesosHuesos ;
			}
		}
	}

	if (tipoViaje == "Directo" && tipoDestino == "Internacional"){
		directoInternacional ++
	}
	promedioNacional = contadorNacional / numeroIngreso;

	promedioInternacional = contadorInternacional / numeroIngreso;
	
	document.write ("Pepepeposo recaudó: $" + pesosPepepeposo + "; Quinoto recaudó: $" + pesosQuinoto + " y Huesos recaudó: $" + pesosHuesos + "<br/>" + mayorRecaudo + 
	"<br/> El promedio de viajes nacionales es: " + promedioNacional + 
	" y el de internacionales: " + promedioInternacional + "<br/> La cantidad de vielos directos internacionales vendidos fue de: " + directoInternacional);

	/*let nombre;

	nombre = prompt ("Ingrese su nombre");

	alert ("Hola " + nombre);*/
}
