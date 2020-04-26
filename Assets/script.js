$(document).ready(function() {

// Variables

var startButton = $('#start-button');
var time = 30;
var timeLeft = $('#timeLeft');
var questions = $('#questions');
var answers = $('#answers');
var i = 0;
var check = $('#check');
var score = $("<div>");
var initialForm = $("<form>");
var initialLabel = $("<label>");
var initialInput = $("<input type='text' value =''/>");

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

// User clicks start button -> start timer

// startButton.on("click", setTime());

startButton.on("click", timer);

var interval;

function timer () {
    interval = setInterval(function () {
        time = Math.max(time - 1,0);
        timeLeft.text("Time: " + time);
        
        if(time === 0 || i === questionList.length) {            
            clearInterval(interval);
        }   
    }, 1000);
        
    
};

// and prompt first question
startButton.on("click", startQuiz);
       
function startQuiz () {

    questions.empty();
    answers.empty();

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
            time = Math.max( time - 5,0);
            console.log(time);
            timeLeft.text("Time: " + time);
        };

        i++;
        startQuiz();
        
    });

    endQuiz ();
};    
    


    // Game end functionality 
function endQuiz () {
    // Check if timer = 0
    if (time === 0 || i === questionList.length) {

        // End the game
        questions.empty();
        answers.empty();
        check.empty();

        questions.text("All done!");

        // Display score/
        score.addClass("text-left");
        score.text("Your score is: " + time);
        answers.append(score);

        // Provide an input to enter initials
        initialForm.addClass("text-left");
        answers.append(initialForm);
        // initialLabel.addClass("text-left");
        initialLabel.text("Your initials: " + "   ");
        initialForm.append(initialLabel);
        initialForm.append(initialInput);

        // When user submits initials

        // Add highscore to local storage

        // Display list of highscores     
       

    };

};

})