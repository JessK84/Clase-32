// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

const base = Number(prompt("Ingrese el valor de la base del triángulo que desea calcular"));
const altura = Number(prompt("Ingrese la altura del triángulo"));
const area = (base * altura) / 2;

alert(`El área de su triángulo es: ${base}`);
