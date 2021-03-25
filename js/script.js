$(document).ready(function () {

  $("form").submit(function (e) {

    e.preventDefault();
    const age = $("#fage").val();

    if (age > 17 ) {
      $("#voter").show();
    } else if ( age < 18 && age > 125) {
      $("#nonVoter").show();
    } else {
      alert("You entered something other than a number. Please enter a number!");
    }

  });

});