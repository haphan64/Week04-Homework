$(document).ready(function() {

// Variables

var startButton = $('#start-button');
var time = 60;
var timeLeft = $('#timeLeft');
var content = $('#content');
var questions = $('#questions');
var answers = $('#answers');

// Questions

var questionList = ['What is the beast in Hogwart\'s Lake?',
                    'When was it put in the lake?',
                    'What color is the beast?',
                    'What is the nature of the beast?',
                    'Where is the beast mentioned?',];

// List of possible answers
        
var answer1List = ['Lochness Monster',
                '2001',
                'blue',
                'docile',
                'Harry Potter books',];

var answer2List =   ['Hydra',
                '1523',
                'rainbow',
                'violent',
                'Harry Potter and the Cursed Child',];

var answer3List =   ['Giant Squid',
                '990',
                'red',
                'magical',
                'Harry Potter movies',];

var answer4List =   ['Charybdis',
                '1997',
                'It can change colors',
                'Wild',
                'All of the above',];

var correctAnswers =    ['Giant Squid',
                        'It can change colors',
                        '990',
                        'docile',
                        'Harry Potter books']


var i = 0;


//  Actions

// User clicks start button -> start timer and prompt first question

// Start time / Total seconds

// startButton.on("click", setTime());

startButton.on("click", function (event) {

    var interval = setInterval(function() {
        time--;
        timeLeft.text("Time: " + time + " seconds.");

    console.log(time);

    if(time === 0) {s
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

    var answer1 = $('<button>');
    var answer2 = $('<button>');
    var answer3 = $('<button>');
    var answer4 = $('<button>');    

    questions.text(questionList[i]);
    answer1.text(answer1List[i]);
    answer2.text(answer2List[i]);
    answer3.text(answer3List[i]);
    answer4.text(answer4List[i]);

    answers.append(answer1);
    answers.append(answer2);
    answers.append(answer3);
    answers.append(answer4);
    
    
    answer1.on('click', function () {
        i++;
        retrieveQuestions();
    });
    
};

function startQuiz () {    

    retrieveQuestions();

}    
    // for (i = 0; i < questionList.length; i++) {

    //     $('#questions').empty();
    //     $('#answers').empty();
        
    //     questions.text(questionList[i]);
    //     answer1.text(answer1List[i]);
    //     // answer2.text(answer2List[i]);
    //     // answer3.text(answer3List[i]);
    //     // answer4.text(answer4List[i]);

    
    //     answers.append(answer1);
    //     // answers.append(answer2);
    //     // answers.append(answer3);
    //     // answers.append(answer4);

    //     console.log(answanswer1List[i]);
    
    //     answer1.on('click', function () {
    //         alert(answer1);
    //         i++;
    //     });

    // };

    // validateAnswer();




// User clicks an answer button,

// function validateAnswer() {

//     if () {
        
//         removeAdditionalTime();
//     }
// }

    // Validate answer to see if correct

        // If not correct, subtract time from clock

    // Then move to next question

        // Clear out html 


        // Generate new html for next question

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