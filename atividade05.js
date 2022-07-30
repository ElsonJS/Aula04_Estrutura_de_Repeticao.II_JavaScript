<script>
     //Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120.
     var fat=1;
     var count=1; 

     do{
         var n1 = parseInt(prompt("Informe o numero para calcular o fatorial:  "));
         
         for(y=1; y<=n1; y++){
             fat=fat * y;
         }             
             
         document.write("<b>!" + n1 + " = " + fat + "</b>");
         count++;
         
     }while(count < 2);
</script>
