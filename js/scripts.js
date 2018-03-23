$(document).ready(function () {
  $("form#track-suggester").submit(function(event) {
    event.preventDefault();

    var questionone = parseInt($("#question-one").val());
    var questiontwo = parseInt($("#question-two").val());
    var questionthree = parseInt($("#question-three").val());
    var questionfour = parseInt($("#question-four").val());
    var questionfive = parseInt($("#question-five").val());

    $("#output").show();
    if (...) {
      $("#response-one").show();
    } else if (...) {
      $("#response-two").show();
    } else {
      $("#response-three").show();
    }

  });
});
