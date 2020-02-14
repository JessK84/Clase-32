// Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

const partida = prompt("¿Desde dónde desea partir?");
const llegada = prompt("¿Hasta dónde desea viajar?");

const distancia = 245;
const auto = distancia / 110;
const bicicleta = distancia / 30;
const aPie = distancia / 4.5;


alert(`En total hay una distancia de ${distancia} km.`);
alert(`Si fuera en auto, a una velocidad de 110 km/h, demoraría: ${auto} horas.`);
alert(`Si fuera en bicicleta, a una velocidad de 30 km/h, demoraría: ${bicicleta} horas.`);
alert(`Si fuera a pie, a una velocidad de 4,5 km/h, demoraría: ${aPie} horas.`);
alert(`Pienselo bien antes de tomar una decisión!`);


