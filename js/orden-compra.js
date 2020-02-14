//Crear un programa que tome la orden de compra de un local. 
//Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos
//uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. 
//Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. 
//Los precios de los productos deben estar definidos de antemano en variables.


const producto1 = prompt("Sólo puede comprar online 3 productos. Ingrese el primer producto");
const cantidad1 = Number(prompt("Ingrese la cantidad deseada"));
const producto2 = prompt("Ingrese el segundo producto");
const cantidad2 = Number(prompt("Ingrese la cantidad deseada"));
const producto3 = prompt("Ingrese el tercer producto");
const cantidad3 = Number(prompt("Ingrese la cantidad deseada"));

precio1 = Number(127);
precio2 = Number(545);
precio3 = Number(231);
const resultado1 = cantidad1 * precio1;
const resultado2 = cantidad2 * precio2;
const resultado3 = cantidad3 * precio3;
const precioTotal = resultado1 + resultado2 + resultado3;

const cuotas3 = precioTotal / 3;
const cuotas6 = precioTotal / 6;
const cuotas12 = precioTotal / 12;

alert(`Ud. eligió ${cantidad1} ${producto1}.
-Valor total de ${producto1}: $${resultado1}`);
alert(`Ud. eligió ${cantidad2} ${producto2}.
-Valor total de ${producto2}: $${resultado2}`);
alert(`Ud. eligió ${cantidad3} ${producto3}.
-Valor total de ${producto3}: $${resultado3}`);
prompt(`Su compra total es = $${precioTotal}.
Puede pagar en: 3, 6 o 12 cuotas. ¿En cuántas desea pagar?`);
alert(`Puede pagar en:
- 3 cuotas de $${cuotas3},
- 6 cuotas de $${cuotas6},
- 12 cuotas de $${cuotas12}.`);

