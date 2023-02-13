/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de
$35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento 
del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del
 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y 
si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% 
de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{   
    let cantidad;
    let precio;
    let descuento;
    let precioFinal;
    let marca;
    let impuesto;
    let precioConImpuesto;

    // txtIdCantidad ; Marca  ; txtIdprecioDescuento

    cantidad= document.getElementById("txtIdCantidad").value;
    cantidad = parseInt (cantidad);

    precio = cantidad * 35;
    marca = document.getElementById("Marca").value;

    if (cantidad >=6) {
        descuento= 0.5;
    }
    else {
        switch (cantidad) {
            case 5:
                switch (marca) {
                    case "ArgentinaLuz":
                        descuento = 0.6;
                        break;
                
                    default:
                        descuento = 0.7;
                        break;
                }
                break;
            case 4:
                switch (marca) {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento= 0.75;
                        break;

                    default:
                        descuento = 0.8;
                }
                break;
            case 3: 
                switch (marca) {
                    case "ArgentinaLuz":
                        descuento = 0.85;
                        break;

                    case "FelipeLamparas":
                        descuento= 0.9;
                        break;
                    default:
                        descuento = 0.95;
                }
                break;
            default:
                descuento = 1;
        }
    }
 
    precioFinal = precio * descuento;

    if (precioFinal >= 120){
        impuesto = precioFinal * 0.1;
        precioConImpuesto = precioFinal + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioConImpuesto;

        alert ("IIBB Usted pago " + precioConImpuesto + ", siendo " + impuesto + " el impuesto que se pagó.")
    }
    else {
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }

}
