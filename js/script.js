$(document).ready(function () {

  $("form").submit(function (e) {

    e.preventDefault();
    const age = $("#fage").val();

    if (age < 18) {
      $("#nonVoter").show();
    } else if (age > 150) {
      alert("You entered something other than a number. Please enter a number!");
    } else if (age >= 18) {
      $("#voter").show();
    } else {
      alert("You entered something other than a number. Please enter a number!");
    }
  });

});