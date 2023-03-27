/*

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

*/
function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let precioMasCaro;
  let tipoMasCaro;
  let tipoMasBolsas;
  let precioConDescuento;
  let precioSinDescuento = 0;
  let mensajeDescuento;
  let acumuladorCal =0;
  let acumuladorCemento = 0;
  let acumuladorArena=0;
  let respuesta = true;
  let banderaDelPrimero = true;

  do {

    do {
			tipo = prompt ("Ingrese el tipo de producto (arena, cal o cemento");

		}while (tipo != "arena" && tipo != "cal" && tipo != "cemento");

    do {
			cantidad = prompt ("Ingrese la cantidad ");
			cantidad = parseInt (cantidad);
		} while (isNaN(cantidad));

    do {
			precio = prompt ("Ingrese el pecio (entre 100 y 300)");
			precio = parseInt (precio);
		} while (precio <1 || isNaN(precio));

    precioSinDescuento = (precio * cantidad) + precioSinDescuento;

    if (cantidad > 10 && cantidad <30){
      precioConDescuento = precioSinDescuento * 0.85;
    }
    else {
      if (cantidad >= 30){
        precioConDescuento =precioSinDescuento * 0.75;
      }
    }

    switch (tipo){
      case "cemento":
        acumuladorCemento = acumuladorCemento + cantidad
        break;

      case "arena":
        acumuladorArena = acumuladorArena + cantidad;
        break;

      default:
        acumuladorCal = acumuladorCal + cantidad;
    }

    if (banderaDelPrimero){
      precioMasCaro = precio;
      tipoMasCaro = tipo;

      banderaDelPrimero = false;
    }
    else {
      if (precioMasCaro<precio){
        precioMasCaro = precio;
        tipoMasCaro = tipo;
      }
    }

    respuesta = confirm ("Desea ingresar otro producto?");

  } while (respuesta);

  if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento){
    tipoMasBolsas = "Arena";
  }
  else {
    if (acumuladorCal > acumuladorCemento){
      tipoMasBolsas = "Cal";
    }
    else {
      tipoMasBolsas = "Cemento";
    }
  }

  if (precioConDescuento != undefined){
    mensajeDescuento = " y el precio con descuento es " + precioConDescuento + ".";
  }
  else{
    mensajeDescuento = ".";
  }


  /*a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo con mas cantidad de bolsas.
  f) El tipo mas caro*/

  document.write ("El importe bruto es " + precioSinDescuento + mensajeDescuento + "<br> El tipo con mas cantidad de bolsas fue " + tipoMasBolsas +
  "<br> Y el tipo mas caro fue " + tipoMasCaro);

}
