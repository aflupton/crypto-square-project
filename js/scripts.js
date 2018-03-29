// Business logic

  // if(!+num)
  //   alert("Please enter a sentence or string of letters.")

var cypher = "";
var columns = [];
var tempCypher = [];

var finalStr = "";


// };  console.log(columns);
//
// var array = [[], [], [], [], []];
//
// for (var i in a)
// {
//    console.log("row " + i);
//    for (var j in a[i])
//      {
//       console.log(" " + a[i][j]);
//      }
var even = false
// remove spaces from string
  cypher = cypher.replace(/\s/g, "");
// split string into array
  tempCypher = cypher.split("");

// var tempCypher = cypher.split("");
console.log(cypher.length);
//determine size of grid
var rows = function(cypher) {
  var squareRoot = (Math.sqrt(cypher.length);
  if (squareRoot % 1 ==0) {
    even = true
  } else {
    return (Math.floor(Math.sqrt(cypher.length)));
  }
}


// UI logic
$(document).ready(function() {
  $("form#encrypt").submit(function(event) {
    event.preventDefault();
    cypher = $("input#encrypt").val().toLowerCase();


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
