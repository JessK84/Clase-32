//Segundos a horas, minutos y segundos. Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)

const segundos = Number(prompt("Ingrese la cantidad de segundos"));


const minutos = segundos / 60;
const segundosSobrantes = segundos % 60; 
const MinutosFinales = (segundos - segundosSobrantes) / 60;


alert(`${segundos} es igual a: ${MinutosFinales} minutos y ${segundosSobrantes} segundos`);