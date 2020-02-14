// Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).

let numeroInicial = Number(prompt("Ingrese un número cualquiera"));
const incremento = 13;
let primerIncremento = numeroInicial + incremento;
const segundoIncremento = primerIncremento + incremento;
alert(`Si a ${numeroInicial} le sumamos ${incremento}, el resultado es: ${primerIncremento}`);
alert(`Si a ${primerIncremento} le sumamos nuevamente ${incremento}, el resultados es: ${segundoIncremento}`);
const tercerIncremento = segundoIncremento + incremento;
alert(`Si a ${segundoIncremento} le sumamos nuevamente ${incremento}, el resultados es: ${tercerIncremento}`);
const cuartoIncremento = tercerIncremento + incremento;
alert(`Si a ${tercerIncremento} le sumamos nuevamente ${incremento}, el resultados es: ${cuartoIncremento}`);
const quintoIncremento = cuartoIncremento + incremento;
alert(`Si a ${cuartoIncremento} le sumamos nuevamente ${incremento}, el resultados es: ${quintoIncremento}`);