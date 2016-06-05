 $(document).ready(function() {
 
 $('#gameshow, #endjumbotron').hide('slowly');//prep for game start screen


$('#startjumbotron').click(function() {     //start game and timer
    	$('#jumbotronone').hide('slowly');
		  $('#gameshow').show('slowly');
		      questionGenerator(); 
          timer();
       
});          

function timer(){               //timer 
	 var counter = 8; 
         var intervalId = setInterval(function() {              
              counter--;
         var countdown = document.getElementById("tContainer"); 
             countdown.innerHTML = counter;     //timer to screen

          if (counter === 0) {    
              clearInterval(intervalId);
               console.log("timer end");
               endOfGame();
              }
              }, 1000);
  }; //end of timer 

function questionGenerator(){   
      var ques = [
        ["0.0 one jhrkjehflkjhddqjkjjriejqe","0 .1correct","answer1","answer2","answer3"],
         ["1.0two jhrkjehflkjhddqjkjjriejqe","1.1 correct","answer1","answer2","answer3"],
       ];
       console.log(ques.length);


            var quesbox = $('<div class="questionbox">');  
            var questiontxt = ques[0] [0];
            quesbox.append(questiontxt); 

            var ansbox = $('<div class="answerbox">');  
            var answercorrect = ques[0][1]; 
            var answertxt1 = ques[0][2]; 
            var answertxt2 = ques[0][3]; 
            var answertxt3 = ques[0][4];
            ansbox.append(answercorrect, answertxt1, answertxt2,answertxt3);   

           $("#qContainer").append(quesbox, ansbox);
  };        
  



function endOfGame(){

    $('#gameshow').hide('slowly');
    $('#endjumbotron').show('slowly');

};

});

/*
function appendText() {
    var txt1 = "<p>Text.</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("txt3cnt");
    txt3.innerHTML = " created element 1Text";         

    $("#gContainer").append(txt1, txt2, txt3);     
  }
//var questions = []; //stores questions and answers 

//unction questionGenerator{
//    var txt3 = document.createElement("p");
  //  txt3.innerHTML = "Text.";   


//}// writes questions and answers to screen, random order to questions, random order to answers right answer flage radio buttons for loops and 

//questionTimer{}

//

//gameScore{}


//show hide new element for total score, correct incorrect answer totals button for new game
/*var triviaQuestions = {question:"question question question question question question question question question ", correct:"correct", choice1:"c1"choice2:"c2"choice3:"c3"};
$("#gContainer").append(txt1, txt2, txt3);     // Append new elements
}*/