$(document).ready(function () {
  $("form#track-suggester").submit(function(event) {
    event.preventDefault();
    var userName = $("#userName").val();
    var questionOne = parseInt($("#questionOne").val());
    var questionTwo = parseInt($("#questionTwo").val());
    var questionThree = parseInt($("#questionThree").val());
    var questionFour = parseInt($("#questionFour").val());
    var questionFive = parseInt($("#questionFive").val());
    var output = questionOne + questionTwo + questionThree + questionFour + questionFive;

    $("#output").show();
    if (output <=5) {
      $("#css").slideDown();
    } else if (output <=10) {
      $("#ruby").slideDown();
    } else {
      $("#java").slideDown();
    }

    $(".userName").text(userName);

    $("#clear").click(function() {
      location.reload();
    });
  });
});
