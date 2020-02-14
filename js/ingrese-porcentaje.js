// Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.


const numero = Number(prompt("Ingrese un número"));
const porcentaje = Number(prompt("Ingrese el porcentaje que le gustaría obtener del número elegido"));
const resultado = (numero * porcentaje) / 100;

alert(`El ${porcentaje}% de ${numero} es: ${resultado}`);
