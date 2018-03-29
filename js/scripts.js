//back-end logic
var cryptofunction = function (cypher){
  cypher = cypher.replace(/\s/g, "");
  var columns = columnsfunction(cypher.length);
  var result = "";
  var counter = 0;
  for (var i = 0; i < columns; i ++){
    for (var j = i; j < cypher.length; j += columns){
      if ((counter % 5) === 0){
        result = result.concat(" ");
      }
      result = result.concat(cypher[j]);
      counter ++;
    }
  }
  return result;
}
//sub-function that determines cryptosquare grid sizing
var columnsfunction = function(length){
    var n = 1;
    while (length > (n * n)){
        n ++;
    };
    return n;
}

//      cypher = cypher.split("");

// UI logic
$(document).ready(function() {
  $("form#encrypt").submit(function(event) {
    event.preventDefault();
    var cypher = $("input#encrypt").val().toLowerCase();
    var output = cryptofunction(cypher);


    $("#result").show();
    $("#output").text(output);
    //hides result with click
    $("#encrypt").click(function(){
        $("#result").fadeOut("slow");
      });
});
});
