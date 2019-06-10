

function questionsPlugin() {
    var scores = 0;

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.answer = 0;
        this.log = function() {
            console.log(question);
            for (var i in answers) {
                console.log(i + ': ' + answers[i] );
            };    
        };
        this.check = function() {
            if (this.answer == this.correct) {
                scores++;
                console.log('Answer is correct! Your scores is: ' + scores);              
            } else if (this.answer == 'exit') {
                console.log('THE END! Your scores is: ' + scores);
            } else {
                console.log('Answer is NOT correct! Your scores is: ' + scores);
            }
        }
    };

    var exit;

    function ask(a) {
        a.log();
        a.answer = prompt('Please select the correct answer (just type the number.'); 
        exit = a.answer;
        a.check();
    } 

    var Name = new Question('What is my name?', ['Sofia', 'Olga', 'Julia'], 1);
    var Age = new Question('What is my age?', [10, 20, 15, 52, 30], 4);
    var City = new Question('Where am I from?', ['Kemerovo', 'Krakow', 'Inskoy'], 2);
    
    var questions = [Name, Age, City];

    while(exit != 'exit') {
        ask(questions[Math.floor(Math.random()*questions.length)]);
    };
    
    
}

questionsPlugin();