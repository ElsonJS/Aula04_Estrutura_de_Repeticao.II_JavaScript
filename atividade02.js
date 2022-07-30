<!DOCTYPE html>
<html>
  <head>
        <title>JavaScript</title>
        <b>Exibir até o termo:  </b><input id="numero" type="number"> <br><br>
        <button onclick="esimo()"><b>Exibir</b></button><br>
   </head>    
   <body>
      <script>
        //A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.  
        function esimo(){
          var termo = parseInt(document.getElementById('numero').value);    
          var penultimo=0;
          var ultimo=1;
          var n1;

         if(termo<=2)
            n1 = termo-1;
         else
            for(count=3 ; count<=termo ; count++){
              n1 = ultimo + penultimo;
              penultimo = ultimo;
              ultimo = n1;
            }

         document.write("<h3>" +n1+ "</h3><br>");
      }
     </script>
  </body>
</html>
