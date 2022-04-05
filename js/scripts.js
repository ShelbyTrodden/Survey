$(document).ready(function() {
  $("#form1").submit(function(event) {
    const nameInput = $("input#name").val();

  $(".name").append(nameInput);
  
  event.preventDefault();
  });
});