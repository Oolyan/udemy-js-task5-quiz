(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;

    this.log = function() {
      console.log(this.question);
      for (var i in this.answers) {
        console.log(i + ": " + this.answers[i]);
      }
    };
  }

  function Quiz() {
    this.questions = [
      new Question("What is my name?", ["Sofia", "Olga", "Julia"], 1),
      new Question("What is my age?", [10, 20, 15, 52, 30], 4),
      new Question("Where am I from?", ["Kemerovo", "Krakow", "Inskoy"], 2)
    ];
    this.scores = 0;
    this.EXIT_ANSWER = "exit";

    this.getRandomQuestion = function() {
      return this.questions[Math.floor(Math.random() * this.questions.length)];
    };

    this.ask = function(question) {
      question.log();
      var answer = prompt(
        "Please select the correct answer (just type the number) or type 'exit'"
      );
      this.checkQuestionAnswer(question, answer);
      return answer;
    };

    this.checkQuestionAnswer = function(question, answer) {
      if (answer == question.correct) {
        this.scores++;
        console.log("Answer is correct! Your scores is: " + this.scores);
      } else if (answer == this.EXIT_ANSWER) {
        console.log("THE END! Your scores is: " + this.scores);
      } else {
        console.log("Answer is NOT correct! Your scores is: " + this.scores);
      }
    };

    this.start = function() {
      var answer;
      while (answer !== this.EXIT_ANSWER) {
        answer = this.ask(this.getRandomQuestion());
      }
    };
  }

  new Quiz().start();
})();
