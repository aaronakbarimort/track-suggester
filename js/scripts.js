$(document).ready(function () {
  $("form#track-suggester").submit(function(event) {
    event.preventDefault();

    var questionone = parseInt($("#question-one").val());
    var questiontwo = parseInt($("#question-two").val());
    var questionthree = parseInt($("#question-three").val());
    var questionfour = parseInt($("#question-four").val());
    var questionfive = parseInt($("#question-five").val());
    var output = questionone + questiontwo + questionthree + questionfour + questionfive;

    $("#output").show();
    if (output <=5) {
      $("#css").show();
    } else if (output <=10) {
      $("#ruby").show();
    } else {
      $("#java").show();
    }

    $("#clear").click(function() {
      location.reload();
    });
  });
});
