<script>
      //Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
      var n1=1;
      var par=0;
      var impar=0;

      while(n1 <= 10){
            a=parseInt(prompt("informe numero:  "));
            n1 = n1 + 1;
            if(a%2== 0)
               par=par+1;
            else
               impar=impar+1;
       }
     document.write("<b>A quantida de números pares é:  "+ par+"<br>A quantida de números ímpares é:  "+ impar+"</b>");   
</script>
