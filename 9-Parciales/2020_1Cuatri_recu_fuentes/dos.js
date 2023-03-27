/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro

*/

function mostrar()
{ let tipo;
	let precio;
	let cantidad;
  let acumuladorBolsas = 0;
  let precioSinDescuento ;
  let acumuladorPrecioSinDescuento = 0
  let respuesta;
  let acumuladorCal=0;
  let acumuladorArena =0;
  let acumuladorCemento=0;
  let precioConDescuento;
  let tipoMasCantidad;
  let banderaPrimerPrecio =true;
  let precioMasCaro;
  let tipoMasCaro;
  let mensajeDescuento;

  do {
    do {
      tipo = prompt ("Ingrese el tipo de producto (arena, cal o cemento)");

    }while (tipo!= "arena" && tipo!= "cemento" && tipo!= "cal" );

    do {
      cantidad = prompt ("Ingrese la cantidad de bolsas");
      cantidad = parseInt (cantidad);

    }while (isNaN (cantidad) || cantidad <1 /* agregado dsp*/);

    do {
      precio = prompt ("Ingrese el precio (entre 100 y 300)");
      precio = parseInt (precio);

    }while (isNaN (precio) || precio <1);

    precioSinDescuento = cantidad * precio;

    acumuladorPrecioSinDescuento = acumuladorPrecioSinDescuento + precioSinDescuento;

    acumuladorBolsas = acumuladorBolsas + cantidad; // = acumuladorArena + acumuladorCal + acumuladorCemento (mas abajo)

    
    switch (tipo) {
      case "arena":

        acumuladorArena = acumuladorArena + cantidad;
        break;
      
        case "cal":
          
          acumuladorCal = acumuladorCal + cantidad;
          break;

        default:
          
          acumuladorCemento = acumuladorJabon + cantidad
          break;
    }

    if (banderaPrimerPrecio){
      precioMasCaro = precio;
      tipoMasCaro = tipo;
      banderaPrimerPrecio = false;
    }
    else {
      if (precioMasCaro< precio){
        precioMasCaro = precio;
        tipoMasCaro = tipo;
      }
    }

    respuesta = confirm ("¿Desea continuar ingresando?");

  }while (respuesta);

  if (acumuladorBolsas > 10 && acumuladorBolsas <30){
    precioConDescuento = acumuladorPrecioSinDescuento * 0.85;
  
  }
  else {
    if (acumuladorBolsas >=30){
      precioConDescuento = acumuladorPrecioSinDescuento *0.75;
    }
  }

  if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento){
		
		tipoMasCantidad ="arena";

	}
	else {
		if (acumuladorCal>acumuladorCemento){
			
      tipoMasCantidad ="cal";
		}
		else {
		
      tipoMasCantidad ="cemento";
		}
	}

  if (precioConDescuento != undefined){
    mensajeDescuento = " y el precio con descuento es " + precioConDescuento + ".";
  }
  else{
    mensajeDescuento = ".";
  }


  /*
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
  f) El tipo mas caro
  */

  document.write ("El importe bruto es " + acumuladorPrecioSinDescuento + mensajeDescuento +
  "<br> El tipo con mas cantidad de bolsas compradas es " + tipoMasCantidad + 
  "<br> Y el tipo mas caro es " + tipoMasCaro);
} 







