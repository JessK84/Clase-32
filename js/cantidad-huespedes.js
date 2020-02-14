//Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

//const totalHabitacion = 80;

//alert('El hotel dispone de 80 habitaciones');
const personasAlbergan = Number(prompt("¿Cuántas personas son las que se albergan?"));
const tipoHabitacion = Number(prompt("¿Habitaciones de cuántas personas necesita?"));


const cantidadHabitacion = personasAlbergan / tipoHabitacion;

alert(`Para ${personasAlbergan} personas va a necesitar ${cantidadHabitacion} habitaciones
Este hotel es el idea para ud.!`);