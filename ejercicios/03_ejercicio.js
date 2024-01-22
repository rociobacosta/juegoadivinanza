let diaActual = prompt('Que día de la semana es: ');
let numero = prompt('Ingrese un número');
let puntuacion = prompt('Cuál es tu puntuación?');
let saldo = prompt('Cuál es tu saldo?');
let saludo = prompt('Cuál es tu nombre:');

if(diaActual == 'Sábado' || diaActual == "Domingo"){
  alert("Buen fin de semana.");
}else{
  alert ("Buena semana!.");
}

if(numero >= 1){
  alert("El número es positivo");
}else{
  alert("El número es negativo");
}

if(puntuacion >= 100){
  alert("Felicidades, has ganado!");
}else{
  alert("Intenta nuevamente para ganar");
}

alert(`Tu saldo es: ${saldo}`);

alert(`Hola ${saludo}, bienvenido a nuestra página`);