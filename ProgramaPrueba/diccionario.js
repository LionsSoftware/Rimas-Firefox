
$(document).ready(function() {

  $(".rimarpor").change(function() {
      var pal = $('#palabra').val();
      var ult_letr = $(".rimarpor").val();
      ult_letr = - ult_letr;
      var busqueda = pal.slice(ult_letr);

      $.getJSON('palabras.json', function(data) {
        $('#diccionario').empty();
        $.each(data, function(indiceEntrada, entrada) {
          
          var palabraDicc = entrada['palabra'];
          var ult_letr_dicc = palabraDicc.slice(ult_letr);
          if(busqueda==ult_letr_dicc){
              
              var html = '<div class="entrada">';
              html += '<h3 class="termino">'; 
              html += '<a href=' + "http://raequel.sebastianoliva.com/json?query=" + encodeURI(palabraDicc) + '>' + palabraDicc + '</a>'; 
              html += '</h3>';
              html += '</div>';
              $('#diccionario').append($(html));
          }

          

        
        });

      });



     
  });


  
  
});


