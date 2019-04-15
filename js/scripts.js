
// Business logic for Pet


// User Interface

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

  });

  $("#sleep-button").click(function(){
    $("#form").slideUp();
    $ ("#check-buttons").slideUp();
    $("#sleep-table").slideDown();
  });

  $("#back-button").click(function(){
    $("#form").slideDown();
    $ ("#check-buttons").slideDown();
    $("#sleep-table").slideDown();
    $("#sleep-table").slideUp();
  });
});
