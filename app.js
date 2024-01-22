let numeroSecreto = 7;
let numeroUsuario = 0;


while(numeroSecreto !== numeroUsuario){
  numeroUsuario = prompt('Me indicas un número entre 1 y 10, por favor:');
  if(numeroSecreto == numeroUsuario){
    alert(`Acertaste, el número es : ${numeroUsuario}`);
  }else{
    if (numeroUsuario > numeroSecreto) {
      alert('El numero secreto es menor');
    } else {
      alert('El numero secreto es mayor');
    }
  }
}
