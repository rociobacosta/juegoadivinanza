let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";


while(numeroSecreto !== numeroUsuario){
  numeroUsuario = prompt('Me indicas un número entre 1 y 10, por favor:');
  console.log(numeroUsuario);

  if(numeroSecreto == numeroUsuario){
    alert(`Acertaste, el número es : ${numeroUsuario}, lo hiciste en ${intentos} ${palabraVeces}`);
  }else{
    if (numeroUsuario > numeroSecreto) {
      alert('El numero secreto es menor');
    } else {
      alert('El numero secreto es mayor');
    }
    //incrementamos el contador cuando no acierta
    intentos = intentos + 1;
    palabraVeces ='veces';
  }
};
