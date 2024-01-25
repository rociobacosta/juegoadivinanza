//1
console.log('Hola, bienvenidos!');

//2
let nombre = "Rocio";
console.log(`Hola ${nombre}`);

//3
alert(`Hola ${nombre}!`);

//4
let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`${lenguaje}`);

//5
let valor1 = 16;
let valor2 = 3;

let resultadoSuma = valor1 + valor2;

console.log(`La suma de ${valor1} + ${valor2} es igual a ${resultadoSuma}`);

//6

let resultadoResta = valor1 - valor2;
console.log(`La resta de ${valor1} - ${valor2} es igual a ${resultadoResta}`);

//7
let edad = prompt('Ingresa tu edad');

if(edad >= 18){
  console.log('El usuario es mayor de edad');
}else{
  console.log('El usuario es menor de edad');
}

//8
let numero = prompt('Elije un número');

if(numero == 0){
  console.log ('El número es 0');
}else if(numero >= 1){
   console.log('El número es positivo');
  } else{
     console.log('el número es negativo');
}


//9
let contador = 1;

while(contador <= 10){
  console.log(contador);
  contador++;
}

//10
let nota = 10;

if(nota >= 7){
  console.log('Aprobado');
}else{
  console.log('Desaprobado');
}

//11
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//12
let numeroEntero = Math.floor(Math.random()*10) + 1;
console.log(numeroEntero);

//13
let numeroAlto = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAlto);