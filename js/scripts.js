// Business logic

  // if(!+num)
  //   alert("Please enter a sentence or string of letters.")

var cypher = "";
var row3 = [];
var row1 = [];
var row2 = [];


// UI logic
$(document).ready(function() {
  $("form#encrypt").submit(function(event) {
    event.preventDefault();
    cypher = $("input#encrypt").val().toLowerCase();

    // function encrypt(){
      cypher = cypher.replace(/\s/g, "");
      cypher = cypher.split("");
      // var tempCypher = cypher.split("");
    console.log(cypher.length);

    // };



    $("#result").show();
    $("#output").text(cypher);
    $("#encrypt").click(function(){
        $("#result").fadeOut("slow");
      });
});
});
//
// var one = firstLetter
// var two = secondLetter
// var three = thirdLetter
// var four = forthLetter
// var five = fifthLetter
// var six = sixthLetter
// var seven = seventhLetter
// var eight = eighthLetter
// var nine = ninthLetter
