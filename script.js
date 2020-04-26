$(document).ready(function() {

// Variables

var startButton = $('#start-button');
var time = 30;
var timeLeft = $('#timeLeft');
var questions = $('#questions');
var answers = $('#answers');
var i = 0;
var check = $('#check');

// Questions

var questionList = ['What is the beast in Hogwart\'s Lake?',
                    'When was it put in the lake?',
                    'What color is the beast?',
                    'What is the nature of the beast?',
                    'Where is the beast mentioned?',];

// List of possible answers
        
var answer1List = ['Lochness Monster',
                '2001',
                'Blue',
                'Docile',
                'Harry Potter Books',];

var answer2List =   ['Hydra',
                '1523',
                'Rainbow',
                'Violent',
                'Harry Potter and the Cursed Child',];

var answer3List =   ['Giant Squid',
                '990',
                'Red',
                'Magical',
                'Harry Potter Movies',];

var answer4List =   ['Charybdis',
                '1997',
                'It can change colors',
                'Wild',
                'All of the above',];

var correctAnswers =    ['Giant Squid',
                        'It can change colors',
                        '990',
                        'Docile',
                        'Harry Potter Books']

var answer1 = $('<button>'),
    answer2 = $('<button>'),
    answer3 = $('<button>'),
    answer4 = $('<button>');    

//  Actions

// User clicks start button -> start timer and prompt first question

// startButton.on("click", setTime());

startButton.on("click", function (event) {

    var interval = setInterval(function() {
        time--;
        timeLeft.text("Time: " + time);

    console.log(time);

    if(time === 0) {
      clearInterval(interval);
    }

    }, 1000);

});

// startButton.on("click", startQuiz());


startButton.on("click", startQuiz);
    
    // Questions



function retrieveQuestions () {

    $('#questions').empty();
    $('#answers').empty();

    answer1.addClass("btn btn-outline-danger btn-sm text-left mb-1 answer");
    answer2.addClass("btn btn-outline-success btn-sm text-left mb-1 answer");
    answer3.addClass("btn btn-outline-primary btn-sm text-left mb-1 answer");
    answer4.addClass("btn btn-outline-warning btn-sm text-left mb-1 answer");

    questions.text(questionList[i]);
    questions.addClass("text-left");

    answer1.text(answer1List[i]);
    answer2.text(answer2List[i]);
    answer3.text(answer3List[i]);
    answer4.text(answer4List[i]);

    answers.append(answer1);
    answers.append(answer2);
    answers.append(answer3);
    answers.append(answer4);

    // User clicks an answer button,  
    $(".answer").on('click', function () {        
            
       // Validate answer to see if correct
        if (correctAnswers.includes($(this).text())) {
            
            check.text("Correct");
            
        } 

        // If not correct, subtract time from clock
        else {
            check.text("Incorrect");
            time - 5;
            timeLeft.text("Time: " + time);
        };


        i++;
        retrieveQuestions();
        
    });
    

};

function startQuiz () {    

    retrieveQuestions();

}    
  
   
  

// Interval to create a countdown - setInterval (callback, 1000)

    // Increment elaspedTime

    // Calc current time left by (totalTime - elapsedTime)

    // Check if timer = 0

        // End the game
    
    // Update the time left number in the html

// Game end functionality

    // Display score

    // Provide an input to enter initials

// When user submits initials

    // Add highscore to local storage

    // Display list of highscores


// How are different actions going to run

// Click start button to run startGame ()

// Click an answer button to run va

})