// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("button").click(function(){
    let random = Math.random();
    console.log(random);
    var computerchoice = "";
     if(random <= 0.3){
        computerchoice = "rock";
    }
     if(random > 0.3 && random < 0.6){
        computerchoice = "paper";   
     }
     if(random >= 0.6 && random <= 1.0){
        computerchoice = "scissors";
     }
     
    console.log(computerchoice);
    

});




// DOCUMENT READY FUNCTION BELOW

