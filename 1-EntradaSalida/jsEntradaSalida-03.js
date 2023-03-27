/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
-------------------------------------------------
A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo

1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes

2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo

5-solo para alumnos que crean sus propios desafíos
m- inventate uno
n- se creativo en este
o- uno facil 
p- uno dificil


*/
function mostrar()
{	
	let nombreTitular;
	let lugar;
	let temporada;
	let cantidadDias;
	let importe;
	let altura;
	let sexo;
	let peso;
	let equipaje;
	let metodoPago;
	let respuesta;
	let contadorTemporadaBaja =0;
	let contadorTemporadaAlta=0;
	let acumuladorPesoVillaGessel = 0;
	let diasPuertoMadryn =0;
	let diasVillaGessel=0;
	let diasCordoba=0;
	let mayorDiasAcumulados;
	let acumuladorImportes=0;
	let banderaDelPrimero = true;
	let pesoMaximo;
	let pesoMinimo;
	let nombrePesoMaximo;
	let nombrePesoMinimo;
	let banderaPrimerImporte = true;
	let mayorImporte;
	let lugarMayorImporte;
	let primeraMujer = true;
	let alturaMujerMasAlta;
	let nombreMujerMasAlta;
	let contadorMercado=0;
	let contadorTarjete=0;
	let contadorEfectivo =0;
	let metodoMasUtilizado;
	let temporadaMasViajes;
	let contadorCordoba =0;
	let contadorVillaGessel=0;
	let contadorPuertoMadryn=0;
	let lugarMasPasajeros

	do {
		do {
			nombreTitular = prompt ("Ingrese su nombre");
		} while (! (isNaN (parseInt (nombreTitular))));
		do {
			lugar = prompt ("Ingrese el lugar (Puerto Madryn, Villa Gessel o Cordoba)");
		} while (lugar != "Puerto Madryn" && lugar != "Villa Gessel" && lugar != "Cordoba");

		do {
			temporada = prompt ("Ingrese la temporada (alta o baja)");
		}while (temporada != "alta" && temporada!= "baja");
		
		do {
			cantidadDias = ("Ingrese la cantidad de dias que durara el viaje");
			cantidadDias = parseInt (cantidadDias)
		}while (isNaN (cantidadDias));

		do {
			importe = ("Ingrese el importe");
			importe = parseInt (importe);
		}while (isNaN (importe));
		do {
			altura = ("Ingrese la altura");
			altura = parseInt (altura);
		}while (isNaN (altura));
		do {
			peso = ("Ingrese el peso");
			peso = parseInt (peso);
		}while (isNaN (peso));

		do {
			sexo = prompt ("Ingrese el sexo (F, M o NB)");
		} while (sexo != "F" && sexo != "M" && sexo != "NB");

		do {
			equipaje = prompt ("Va con equipaje de mano? (Responda si o no)");
		}while (equipaje != "si" && equipaje!= "no");

		do {
			metodoPago = prompt ("Ingrese el metodoPago (mercado, tarjeta o efectivo)");
		} while (metodoPago != "mercado" && metodoPago != "tarjeta" && metodoPago != "efectivo");

		switch (temporada){
			case "alta":
				contadorTemporadaAlta  ++
				break;
			default:
				contadorTemporadaBaja ++
				break;
		}

		switch (lugar){
			case "Villa Gessel":
				acumuladorPesoVillaGessel = acumuladorPesoVillaGessel + peso;

				diasVillaGessel = diasVillaGessel + cantidadDias;
				contadorVillaGessel ++
				break;
			case  "Puerto Madryn":
				diasPuertoMadryn = diasPuertoMadryn + cantidadDias;
				contadorPuertoMadryn ++
				break;
			default :
				diasCordoba = diasCordoba + cantidadDias;
				contadorCordoba ++
		}

		acumuladorImportes = acumuladorImportes + importe;

		if (banderaDelPrimero){
			pesoMaximo = peso;
			pesoMinimo = peso;
			nombrePesoMaximo = nombreTitular;
			nombrePesoMinimo = nombreTitular;
			banderaDelPrimero = false;
		}
		else {
			if (pesoMaximo < peso){
				pesoMaximo = peso;
				nombrePesoMaximo = nombre;
			}
			else {
				if (pesoMinimo > peso){
					pesoMinimo = peso;
					nombrePesoMinimo = nombre;
				}
			}
		}
		
		if (banderaPrimerImporte){
			mayorImporte = importe;
			lugarMayorImporte = lugar;
			banderaPrimerImporte = false;
		}
		else {
			if (mayorImporte < importe){
				mayorImporte = importe;
				lugarMayorImporte = lugar;
			}
		}

		if (sexo == "F"){
			if (primeraMujer){
				alturaMujerMasAlta = altura;
				nombreMujerMasAlta = nombre;
			}
			else{
				if (alturaMujerMasAlta< altura){
					alturaMujerMasAlta = altura;
					nombreMujerMasAlta = nombre;
				}
			}
		}
		switch (metodoPago){
			case "mercado":
				contadorMercado ++
				break;
			case "tareta":
				contadorTarjete ++
				break;
			default:
				contadorEfectivo ++

		}

		respuesta = confirm ("¿Desea continuar ingresando?")

	}while (respuesta);
	
	if (diasCordoba > diasPuertoMadryn && diasCordoba > diasVillaGessel){
		mayorDiasAcumulados = "Cordoba";
	}
	else {
		if (diasPuertoMadryn > diasVillaGessel){
			mayorDiasAcumulados = "Puerto Madryn";
		}
		else {
			mayorDiasAcumulados = "Villa Gessel";
		}
	}

	if (contadorEfectivo > contadorMercado && contadorEfectivo > contadorTarjete){
		metodoMasUtilizado = "efectivo";
	}
	else {
		if (contadorMercado > contadorTarjete){
			metodoMasUtilizado = " mercado";
		}
		else {
			metodoMasUtilizado = "tarjeta";
		}
	}

	if (contadorTemporadaAlta > contadorTemporadaBaja){
		temporadaMasViajes = "alta";
	}
	else {
		temporadaMasViajes = "baja";
	}

	if (contadorCordoba > contadorPuertoMadryn && contadorCordoba > contadorVillaGessel){
		lugarMasPasajeros = "Cordoba";
	}
	else {
		if (contadorPuertoMadryn > contadorVillaGessel){
			lugarMasPasajeros = " Puerto madryn";
		}
		else {
			lugarMasPasajeros = "Villa Gessel";
		}
	}
	/*
	1 
	a- cantidad de personas que viajan en cada temporada
	b- el peso acumulado de todos los que viajan a villa gessel
	c- el lugar con la mayor cantidad de días acumulados
	d- la suma de todos los importes

	*/

	document.write ("En temporada alta viajan " + contadorTemporadaAlta + " personas, y en temporada baja, " + contadorTemporadaBaja + 
	". <br> El peso acumulado de los que viajan a Villa Gessel es "+ acumuladorPesoVillaGessel + "<br> El lugar con mayor cantidad de dias acumulados es " + mayorDiasAcumulados + 
	"<br> Y la suma de todos los importes es " + acumuladorImportes);

	/*
	2
	e-el nombre del más pesado de los pasajeros y el del más liviano
	f-el lugar donde se pagó el mayor importe
	g-el nombre de la mujer más alta
	*/

	document.write ("El nombre del mas pesado de los pasajeros es " + nombrePesoMaximo + " y el del mas liviano " + nombrePesoMinimo +
	"<br> El lugar donde se pago el mayor importe fue " + lugarMayorImporte + "<br> La mujer mas alta es " + nombreMujerMasAlta);

	/*
	3
	h- Cuál fue la forma de pago más utilizada
	i- en qué temporada se viajó más
	j- qué lugar tuvo más pasajeros
	*/

	document.write ("La forma de pago mas utilizada fue " + metodoMasUtilizado + "<br> Se viajo mas en temporada "+ temporadaMasViajes + 
	"<br> El lugar con mas pasajeros fue "+ lugarMasPasajeros);
}
/*txtIdNombre
	let nombreIngresado;
	nombreIngresado = document.getElementById ("txtIdNombre").value;

	alert (nombreIngresado);
	*/

