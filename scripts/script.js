const playButton = document.getElementById("playGame")
const leaveButton = document.getElementById("leave")
const nextButton = document.getElementById("next")
const gameContainer = document.getElementById('game')
const questionContainer = document.getElementById('question')
const lText = document.getElementById("letterText");
const qImg = document.getElementById("qImage");
const answerContainer = document.getElementById('choices')
const choiceA = document.getElementById("A");
const textA = document.getElementById("textA");
const choiceB = document.getElementById("B");
const textB = document.getElementById("textB");
const choiceC = document.getElementById("C");
const textC = document.getElementById("textC");
const choiceD = document.getElementById("D");
const textD = document.getElementById("textD");
const progress= document.getElementById("progress");

const questions = [
{
letterText:"This is the letter 'T'.",
question:"Choose the picture of the word that starts with the letter 'T'?",
qimage:"assets/images/letters/Tt.jpg",
choiceA:"assets/images/words/tree.jpg",
textA:"TREE",
choiceB:"assets/images/words/watermelon.jpg",
textB:"WATERMELON",
choiceC:"assets/images/words/hippo.jpg",
textC:"HIPPO",
choiceD:"assets/images/words/pumpkin.jpg",
textD:"PUMPKIN",
correct:"A"

},
{
letterText:"This is the letter 'A'.",
question:"Choose the picture of the word that starts with the letter 'A'?",
qimage:"assets/images/letters/Aa.jpg",
choiceA:"assets/images/words/umbrella.jpg",
textA:"UMBRELLA",
choiceB:"assets/images/words/grapes.jpg",
textB:"GRAPES",
choiceC:"assets/images/words/socks.jpg",
textC:"SOCKS",
choiceD:"assets/images/words/apple.jpg",
textD:"APPLE",
correct: "D"
},
{
letterText:"This is the letter 'S'.",
question:"Choose the picture of the word that starts with the letter 'S'?",
qimage:"assets/images/letters/Ss.jpg",
choiceA:"assets/images/words/car.jpg",
textA:"CAR",
choiceB:"assets/images/words/snake.jpg",
textB:"SNAKE",
choiceC:"assets/images/words/flower.jpg",
textC:"FLOWER",
choiceD:"assets/images/words/dolphin.jpg",
textD:"DOLPHIN",
correct: "B"

},
{
letterText:"This is the letter 'M'.",
question:"Choose the picture of the word that starts with the letter 'M'?",
qimage:"assets/images/letters/Mm.jpg",
choiceA:"assets/images/words/rabbit.jpg",
textA:"RABBIT",
choiceB:"assets/images/words/carrot.jpg",
textB:"CARROT",
choiceC:"assets/images/words/mouse.jpg",
textC:"MOUSE",
choiceD:"assets/images/words/bike.jpg",
textD:"BIKE",
correct: "C"

},
{
letterText:"This is the letter 'I'.",
question:"Choose the picture of the word that starts with the letter 'I'?",
qimage:"assets/images/letters/Ii.jpg",
choiceA:"assets/images/words/teddy.jpg",
textA:"TEDDY",
choiceB:"assets/images/words/books.jpg",
textB:"BOOKS",
choiceC:"assets/images/words/duck.jpg",
textC:"DUCK",
choiceD:"assets/images/words/icecream.jpg",
textD:"ICE-CREAM",
correct: "D"

},
{
letterText:"This is the letter 'H'.",
question:"Choose the picture of the word that starts with the letter 'H'?",
qimage:"assets/images/letters/Hh.jpg",
choiceA:"assets/images/words/hat.jpg",
textA:"HAT",
choiceB:"assets/images/words/eggs.jpg",
textB:"EGGS",
choiceC:"assets/images/words/bird.jpg",
textC:"BIRD",
choiceD:"assets/images/words/alligator.jpg",
textD:"ALLIGATOR",
correct: "A"

},
{
letterText:"This is the letter 'C'.",
question:"Choose the picture of the word that starts with the letter 'C'?",
qimage:"assets/images/letters/Cc.jpg",
choiceA:"assets/images/words/dinosaur.jpg",
textA:"DINOSAUR",
choiceB:"assets/images/words/zebra.jpg",
textB:"ZEBRA",
choiceC:"assets/images/words/cat.jpg",
textC:"CAT",
choiceD:"assets/images/words/squirrel.jpg",
textD:"SQUIRREL",
correct: "C"

},
{
letterText:"This is the letter 'K'.",
question:"Choose the picture of the word that starts with the letter 'K'?",
qimage:"assets/images/letters/Kk.jpg",
choiceA:"assets/images/words/ball.jpg",
textA:"BALL",
choiceB:"assets/images/words/fox.jpg",
textB:"FOX",
choiceC:"assets/images/words/kite.jpg",
textC:"KITE",
choiceD:"assets/images/words/tiger.jpg",
textD:"TIGER",
correct: "C"

},
{
letterText:"This is the letter 'O'.",
question:"Choose the picture of the word that starts with the letter 'O'?",
qimage:"assets/images/letters/Oo.jpg",
choiceA:"assets/images/words/bear.jpg",
textA:"BEAR",
choiceB:"assets/images/words/octopus.jpg",
textB:"OCTOPUS",
choiceC:"assets/images/words/iguana.jpg",
textC:"IGUANA",
choiceD:"assets/images/words/jellyfish.jpg",
textD:"JELLYFISH",
correct: "B"

},
{
letterText:"This is the letter 'P'.",
question:"Choose the picture of the word that starts with the letter 'P'?",
qimage:"assets/images/letters/Pp.jpg",
choiceA:"assets/images/words/leaf.jpg",
textA:"LEAF",
choiceB:"assets/images/words/cake.jpg",
textB:"CAKE",
choiceC:"assets/images/words/ladybird.jpg",
textC:"LADYBIRD",
choiceD:"assets/images/words/pig.jpg",
textD:"PIG",
correct: "D"

},
{
letterText:"This is the letter 'L'.",
question:"Choose the picture of the word that starts with the letter 'L'?",
qimage:"assets/images/letters/Ll.jpg",
choiceA:"assets/images/words/banana.jpg",
textA:"BANANA",
choiceB:"assets/images/words/dog.jpg",
textB:"DOG",
choiceC:"assets/images/words/lion.jpg",
textC:"LION",
choiceD:"assets/images/words/rainbow.jpg",
textD:"RAINBOW",
correct: "C"

},
{
letterText:"This is the letter 'E'.",
question:"Choose the picture of the word that starts with the letter 'E'?",
qimage:"assets/images/letters/Ee.jpg",
choiceA:"assets/images/words/elephant.jpg",
textA:"ELEPHANT",
choiceB:"assets/images/words/fish.jpg",
textB:"FISH",
choiceC:"assets/images/words/kangaroo.jpg",
textC:"KANGAROO",
choiceD:"assets/images/words/seal.jpg",
textD:"SEAL",
correct: "A"

},
{
letterText:"This is the letter 'G'.",
question:"Choose the picture of the word that starts with the letter 'G'?",
qimage:"assets/images/letters/Gg.jpg",
choiceA:"assets/images/words/penguin.jpg",
textA:"PENGUIN",
choiceB:"assets/images/words/monkey.jpg",
textB:"MONKEY",
choiceC:"assets/images/words/orange.jpg",
textC:"ORANGE",
choiceD:"assets/images/words/giraffe.jpg",
textD:"GIRAFFE",
correct: "A" 

},
]

let currentQuestion = 0;
const lastQuestion = questions.length - 1;
playButton.addEventListener('click', playGame)
nextButton.addEventListener('click', nextQuestion)

function playGame() {
  playButton.classList.add('hide')
  document.getElementById("home").classList.add('hide')
  document.getElementById("overlay").classList.add('hide')
  currentQuestionIndex = 0
  gameContainer.classList.remove('hide')
  renderQuestion()
    }

function renderQuestion(){
    let currentQuestionIndex = Math.floor(Math.random() * questions.length);
    for(let i=0; i<questions.length; i++){

    let q = questions[currentQuestionIndex];

    lText.innerHTML = `<h3> ${q.letterText} </h3>`;

    question.innerHTML = `<h3> ${q.question} </h3>`;
    
    qImg.innerHTML = `<img src= ${q.qimage} >`;

    choiceA.innerHTML = `<img src = ${q.choiceA} >`;

    textA.innerHTML = `<button>${q.textA}</button>`;
            
    choiceB.innerHTML = `<img src = ${q.choiceB} >`;

    textB.innerHTML = `<button> ${q.textB} </button>`;

    choiceC.innerHTML = `<img src = ${q.choiceC} >`;

    textC.innerHTML = `<button> ${q.textC} </button>`;

    choiceD.innerHTML = `<img src = ${q.choiceD} >`;

    textD.innerHTML = `<button> ${q.textD} </button>`;
    }
}

function nextQuestion(){

    renderQuestion(questions[currentQuestionIndex ++])

}

choices.addEventListener('click', checkAnswer)
let answer = questions[currentQuestion].correct

function checkAnswer(answer) {
  if (answer == true) {
    // answer is correct
    
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
}

// answer is correct
function answerIsCorrect() {
  Swal.fire({
  icon:'success',   
  title: 'Correct! Well Done',
  text: 'Great Work',
  imageUrl: 'assets/images/play-image.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'abc blocks',
})
}

// answer is Wrong
function answerIsWrong() {
  Swal.fire({
  icon:'error',
  title: 'Oops...Try Again',
  text: 'Wrong Answer',
  imageUrl: 'assets/images/play-image.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'abc blocks',
})
  
}

 document.getElementById("leave").onclick = function () {
        location.href = "index.html";
    };


