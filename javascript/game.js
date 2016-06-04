 $(document).ready(function() {
 
 $('#gameshow, #endjumbotron').hide('slowly');//prep for game start screen


$('#startjumbotron').click(function() {     //start game and timer
    	$('#jumbotronone').hide('slowly');
		  $('#gameshow').show('slowly');
		      questionGenerator();
          appendText();   
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
  }


function appendText() {
    var txt1 = "<p>Text.</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("txt3cnt");
    txt3.innerHTML = " created element 1Text";         

    $("#gContainer").append(txt1, txt2, txt3);     
	}
});

function questionGenerator(){   
      var ques = {
        q1:{
          "question":"jhrkjehflkjhddqjkjjriejqe",
              "answers":["answer1","answer2","answer3","answer4"],
                "correct":"correct"
              }, 
        q1:{
          "question":"jhrkjehflkjhddqjkjjriejqe",
              "answers":["answer1","answer2"],
               "correct":"correct"
             },    
       };
        debugger;
            for (var i = 0; i < 3; i++){
                var quesbox = $('<div id="test"></div>'); 
                quesbox.addClass('theQues');
                quesbox.text(ques.q1.question);
                $("#tContainer").append(quesbox);


              for(var i = 0, l = ques.q1.answers.length; i <= l; i++) {
                    console.log(ques.q1.answers.length);
                      var answrbox = $('<div></div>'); 
                      answrbox.addClass('theQues');
                      answrbox.text(ques.q1.answers[i]);
                    $("#tContainer").append(answrbox);
                }
            };
    };
});


function endOfGame(){

    $('#gameshow').hide('slowly');
    $('#endjumbotron').show('slowly');

};
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