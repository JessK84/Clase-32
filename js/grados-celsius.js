// Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.

const gradosCelsius = Number(prompt("Ingrese los grados Celsius que desea calcular"));

const gradosFahrenheit = (gradosCelsius * 9/5) + 32;

alert(`Sus grados Fahrenheir son ${gradosFahrenheit}`);