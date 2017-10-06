const data = {
      "Pepe" : "pepe@gmail.com",
      "Nacho" : "nacho@gmail.com",
      "Alejandro" : "alejando@gmail.com",
      "Javi" : "javi@gmail.com"
}
$(document).ready(function(){
      $("#dialog-email").dialog({
            autoOpen : false,
            width : "30%",
            buttons: {
                  Confirm : function() {
                        var dialog = this;
                        setTimeout(function(){
                              // Sending email...
                              $( dialog ).dialog( "close" );
                        }, 2000);
                  },
                  Cancel: function() {
                        $( this ).dialog( "close" );
                  }
            }
      });

      $("#send-email").click(function() {
            var  date = new Date();

            var time = date.toLocaleTimeString();
            var day = date.toDateString();
            console.log( day + " " + time );
            $("#dialog-email").dialog( "open" );
      });

      $('#sel-user').change(function() {
            $("#email").text(data[$(this).val()]);
      });
});

/*
      Definir la select del formulario de los usuarios a los que se puede mandar la información.
      Pop-up en el envío de correo de la persona seleccionada.

      Simular carga de datos (Hacer una llamada tonta de red... Validar campos.. hora de mando del mensaje)
*/
