//Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.





const dineroDisponible = Number(prompt("¿Cuánto dierno disponibe tiene?"));
const totalServicioInicial = Number(prompt("¿Cuántos servicios va a pagar?"));
const servicio1 = prompt("Ingrese el servicio");
const precio1 = Number(prompt("¿Cuál es el monto?"));
const number = 1;
const totalServicio = totalServicioInicial - number;
const totalServicio2 = totalServicio - number;
const totalServicio3 = totalServicio2 - number;


const saldo1 = dineroDisponible - precio1;
alert(`Su saldo es: $${saldo1}.
Le falta ingresar: ${totalServicio} servicios`);
let servicio2 = prompt("Ingrese el servicio");
let precio2 = Number(prompt("¿Cuál es el monto?"));
const saldo2 = saldo1 - precio2;
alert(`Su saldo es: $${saldo2}.
Le falta ingresa: ${totalServicio2} servicios`);
let servicio3 = prompt("Ingrese el servicio");
let precio3 = Number(prompt("¿Cuál es el monto?"));
const saldo3 = saldo2 - precio3;
alert(`Su saldo es: $${saldo3}.
Le falta ingresar: ${totalServicio3}`);
