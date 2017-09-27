// https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR-API-KEY
// apiKey AIzaSyCTJRW5kKnwTxgvG_llmxPdSf2DzfY6VEA

/*var api = "https://www.googleapis.com/webfonts/v1/webfonts?key=";
var apiKey = "AIzaSyCTJRW5kKnwTxgvG_llmxPdSf2DzfY6VEA";
*/

$(document).ready(function(){
   $('#myNameIs').hide();
   $('#ed').hide();
});

$('html').click(function(){
    $("#hi").fadeOut("slow");
   $('#myNameIs').fadeIn("swing");
   $('#ed').fadeIn(3000);
});
