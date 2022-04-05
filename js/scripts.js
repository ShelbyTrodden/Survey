$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const mulletInput = $("#mullet").val();
    const radioInput = $("input[name='driver']:checked").val();
    const result=("My name is "+nameInput+" and my favorite mullets are " + mulletInput + " and the best driver is " + radioInput+".")
    $("#output").text(result);


  $("#survey").show();

  event.preventDefault();

  });
});


