//Business logic


$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    debugger;
    var ping = parseInt($("input#ping").val());
    var pong = parseInt($("input#pong").val());
    var pingpong = parseInt($("input#pingpong").val());

    var multiples = [];

      for (var i = number2; i <= number; i += number2) {
        if (number % i === 0) {
          multiples.push(i);
        };

    $('#result').text(multiples);



  };
 });
});
