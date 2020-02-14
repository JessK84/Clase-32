// Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

const dias = Number(prompt("Ingrese la cantidad de días"));

const segundos = dias * 86400;

alert(`${dias} días representan: ${segundos} segundos`);