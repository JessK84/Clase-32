// Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

const partida = prompt("Desde donde desea partir");
const destino1 = prompt("Ingrese el primer destino de viaje");
const kilometrosDestino1 = 1700;

alert(`Desde ${partida} a ${destino1} hay ${kilometrosDestino1} km.`);
const destino2 = prompt("Ingrese el segundo destino");
const kilometrosDestino2 = 980;
const distanciaDestino1 = kilometrosDestino1 + kilometrosDestino2;
alert(`Desde ${destino1} a ${destino2} hay ${kilometrosDestino2} km. En total lleva viajado ${distanciaDestino1} km.`);
const destino3 = prompt("Ingrese el último destino");
const kilometrosDestino3 = 2650;
const distanciaDestino2 = kilometrosDestino1 + kilometrosDestino2 + kilometrosDestino3;
alert(`Desde ${destino2} a ${destino3} hay ${kilometrosDestino3} km. En total lleva viajado ${distanciaDestino2} km.`);







