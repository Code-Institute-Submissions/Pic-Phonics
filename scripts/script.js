(function() {
function buildGame() {
  
  document.getElementById("playGame").style.visibility = "hidden"
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>`
    );
  });

  gameContainer.innerHTML = output.join("");
}


var gameContainer = document.getElementById("game");
var myQuestions = [{
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "SitePoint",
      b: "Simple Steps Code",
      c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
  }
];
  function remove(el) {
  var element = el;
  element.remove();
}
  document.getElementById('playGame').addEventListener('click',buildGame);


}());
