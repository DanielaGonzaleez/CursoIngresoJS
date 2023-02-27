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
  let producto;
  let cantidad;
  let precioPorBolsa;
  let precioSinDescuento;
  let precioConDescuento;
  let respuesta;
  let tipoMasCantidad;
  let tipoMasCaro;
  let precioMasCaro;
  let mensajeDescuento;
  let acumuladorArena =0;
  let acumuladorCal=0;
  let acumuladorCemento = 0;
  let banderaDelPrimero = true;

  do{
    producto = prompt ("Ingrese el producto");

    while (producto != "arena" && producto != "cal" && producto != "cemento"){
      producto =  prompt ("Ingrese un producto valido (cal, arena o cemento)");
    }

    cantidad = prompt ("ingree la cantidad de bolsas");
    cantidad = parseInt (cantidad);

    while (isNaN (cantidad)){
      cantidad = prompt ("ingrese la cantidad de bolsas, en numeros");
      cantidad = parseInt (cantidad);
    }

    do {
      precioPorBolsa = prompt ("Ingrese el precio por bolsa (mayor a 0)");
      precioPorBolsa = parseInt (precioPorBolsa);

      while (isNaN (precioPorBolsa)){
        precioPorBolsa = prompt ("ingrese el precio por bolsa, en numeros");
        precioPorBolsa = parseInt (precioPorBolsa);
      } 

    } while (precioPorBolsa <=0 )

    precioSinDescuento = precioPorBolsa * cantidad;

    if (cantidad >= 10 && cantidad <30){
      precioConDescuento = precioSinDescuento * 0.85
    }
    else {
      if (cantidad >= 30){
        precioConDescuento = precioSinDescuento * 0.75;
      }
    }

    switch (producto){
      case "arena":
        acumuladorArena = acumuladorArena + cantidad;
        break;
      case "cal":
        acumuladorCal = acumuladorCal + cantidad;
        break;
      default:
        acumuladorCemento = acumuladorCemento + cantidad;
    }
    
    if (banderaDelPrimero){
      tipoMasCaro = producto;
      precioMasCaro = precioSinDescuento

      banderaDelPrimero = false;
    }
    else{
      if (precioMasCaro < precioSinDescuento){
        precioMasCaro = precioSinDescuento
      }
    }

    respuesta= confirm ("¿Desea ingresar otro producto?");

  }while (respuesta);

  if (acumuladorArena> acumuladorCal && acumuladorArena > acumuladorCemento){
    tipoMasCantidad = "Arena";
  }
  else{
    if (acumuladorCal > acumuladorCemento){
      tipoMasCantidad = "Cal";
    }
    else {
      tipoMasCantidad = "Cemento";
    }
  }

  if (precioConDescuento != undefined){
    mensajeDescuento = " y el precio con descuento es " + precioConDescuento + ".";
  }
  else {
    mensajeDescuento = ".";
  }
  /*a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo con mas cantidad de bolsas.
  f) El tipo mas caro*/

  document.write ("El importe bruto es $" + precioSinDescuento + mensajeDescuento + "<br> El tipo con mas cantidad de bolsas es " + tipoMasCantidad + " y el tipo mas caro es " + tipoMasCaro);
}
