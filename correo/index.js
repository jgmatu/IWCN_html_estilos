const data = {
      "Pepe" : "pepe@gmail.com",
      "Nacho" : "nacho@gmail.com",
      "Alejandro" : "alejando@gmail.com",
      "Javi" : "javi@gmail.com"
}

const MAXDELAY = 2000;
const DELAY = 350;
const INCREMENT = (DELAY / MAXDELAY) * 100;
const WAIT = 500;

function progressEmail() {
      var total = 0;
      var progress = 0;

      setProgressEmail();
      var interval = setInterval(function() {
            total += DELAY;
            progress += INCREMENT;

            if (total >= MAXDELAY) {
                  clearInterval(interval);
            }
            $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);
      }, DELAY);
}

function setProgressEmail() {
      $("#contact").hide();
      $("#progress-email").show();
      $('.progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
}

function endEmailSend() {
      setTimeout(function() {
            setContactsUI();
            setDialogSendEmail();
      }, MAXDELAY + WAIT);
}

function setContactsUI() {
      $("#progress-email").hide();
      $("#email-send").hide();
      $("#contact").show();
}

function setDialogSendEmail() {
      var  date = new Date();
      var time = date.toLocaleTimeString();
      var day = date.toDateString();
      var finger = $("#email-send").text() + " "  + day + " " + time;

      $("#email-send").text(finger);
      $("#email-send").dialog("open");
}
$(document).ready(function(){
      setContactsUI();

      $("#email-send").dialog({
            autoOpen : false,
            width : "30%",
            buttons: {
                  Confirm : function() {
                        $( this ).dialog( "close" );
                  }
            }
      });

      $("#dialog-email").dialog({
            autoOpen : false,
            width : "30%",
            buttons: {
                  Confirm : function() {
                        progressEmail();
                        endEmailSend();
                        $( this ).dialog( "close" );
                  },
                  Cancel: function() {
                        $( this ).dialog( "close" );
                  }
            }
      });

      $("#send-email").click(function() {
            $("#email-payload").text($("#description").val());

            $("#email-payload").text($("#email-payload").text().split(' ').join(""));
            $("#email-payload").text($("#email-payload").text().split("\n").join(""));

            if ($("#email-payload").text()) {
                  $("#dialog-email").dialog( "open" );
            }
      });

      $('#sel-user').change(function() {
            $("#email").text(data[$(this).val()]);
      });
});
