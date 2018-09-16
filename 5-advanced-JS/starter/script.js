var listOfQuestions = new Array();
var questionNumber = 0;
var answerGivenByUser = 0;
var isGameActive = true;
var score = 0;

generateQuestions();
while(isGameActive){
    askRandomQuestion();
    collectAnswer();
    verifyAnswer();
}


function Question(statement, possibleAnswers, correctAnswer){
    this.statement = statement;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;

    this.askQuestion = function(){
        console.log(this.statement);
        for(var i = 0; i<this.possibleAnswers.length; i++){
            console.log(i+1, ': ', this.possibleAnswers[i]);
        }
    };

    this.verifyAnswer = function(answerGiven){
        if (answerGiven ===  this.correctAnswer){
            score++;
            console.log('You are right!');
        }else{
            console.log('You are wrong :(');
        }
        console.log('Your score is ', score);
        console.log('--------------------------------')
    };
}

function generateQuestions(){
    var question1 = new Question('What is the capical city of Canada?', ['Ottawa', 'Montreal', 'Washington'], 1); 
    var question2 = new Question('Where are the Netherlands?', ['Asia', 'Europe', 'United-States'], 2); 
    var question3 = new Question('Who discovered the pulsars?', ['Einstein', 'Feynman', 'Burnell'], 3);
    var question4 = new Question('Fields medals are awarded for what?', ['Maths', 'Physics', 'Chemistry'], 1); 
    
    listOfQuestions = [question1, question2, question3, question4];
    
}

function askRandomQuestion(){
    questionNumber = Math.floor(Math.random()* 4);
    var question = listOfQuestions[questionNumber];
    question.askQuestion();
}

function collectAnswer(){
    var input = prompt('Answer the question');
    if (input === 'exit'){
        isGameActive = false;
    }else{
        answerGivenByUser = parseInt(input);
    }
}

function verifyAnswer(){
    if(isGameActive){
        var question = listOfQuestions[questionNumber];
        question.verifyAnswer(answerGivenByUser);
    }
}


