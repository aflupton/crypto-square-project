$(document).ready(function() {
  $("form#encrypt").submit(function(event) {
    event.preventDefault();
    var cypher = $("input#encrypt").val();
    console.log(cypher);
});
});
