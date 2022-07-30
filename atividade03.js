<script>
    /*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor
    seja inválido e continue pedindo até que o usuário informe um valor válido.*/
    var nota = parseFloat(prompt("Digite uma nota entre 0 e 10"));

    if(nota >=0 && nota <=10){
        alert("Obrigado, sua nota foi: "+ nota);
    }

    while(nota < 0 || nota >10){
          parseFloat(prompt("Nota inválida, digite novamente:  "));
          break;
    }
</script>
