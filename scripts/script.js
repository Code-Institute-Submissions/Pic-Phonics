
const playButton = document.getElementById("playGame")
const leaveButton = document.getElementById("leave")
const nextButton = document.getElementById("next")
const gameContainer = document.getElementById('game')
const questionContainer = document.getElementById('question')
const lText = document.getElementById("letterText");
const qImg = document.getElementById("qImage");
const choices = document.getElementsByName("choice")
const images= document.getElementById("answers")
const answerContainer = document.getElementById('answers')
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
letterText:"'T'",
question:"Choose the picture of the word that starts with the letter 'T'?",
qimage:"assets/images/letters/Tt.jpg",
images:[
    "assets/images/words/tree.jpg",
    "assets/images/words/watermelon.jpg",
    "assets/images/words/hippo.jpg",
    "assets/images/words/pumpkin.jpg",
],
choices:[
    "TREE",
    "WATERMELON",
    "HIPPO",
    "PUMPKIN"
],
correct: "TREE"

},
{
letterText:"'A'",
question:"Choose the picture of the word that starts with the letter 'A'?",
qimage:"assets/images/letters/Aa.jpg",
images:[
    "assets/images/words/umbrella.jpg",
    "assets/images/words/grapes.jpg",
    "assets/images/words/socks.jpg",
    "assets/images/words/apple.jpg"
],
choices:[
    "UMBRELLA",
    "GRAPES",
    "SOCKS",
    "APPLE"
],
correct:"APPLE"
},
{
letterText:"'S'",
question:"Choose the picture of the word that starts with the letter 'S'?",
qimage:"assets/images/letters/Ss.jpg",
images:[
    "assets/images/words/car.jpg",
    "assets/images/words/snake.jpg",
    "assets/images/words/flower.jpg",
    "assets/images/words/dolphin.jpg"
],
choices:[
    "CAR",
    "SNAKE",
    "FLOWER",
    "DOLPHIN"
],
correct: "SNAKE"

},
{
letterText:"'M'",
question:"Choose the picture of the word that starts with the letter 'M'?",
qimage:"assets/images/letters/Mm.jpg",
images:[
"assets/images/words/rabbit.jpg",
"assets/images/words/carrot.jpg",
"assets/images/words/mouse.jpg",
"assets/images/words/bike.jpg"
],
choices:[
    "RABBIT",
    "CARROT",
    "MOUSE",
    "BIKE",
],
correct: "MOUSE"

},
{
letterText:"'I'",
question:"Choose the picture of the word that starts with the letter 'I'?",
qimage:"assets/images/letters/Ii.jpg",
images:[
    "assets/images/words/teddy.jpg",
    "assets/images/words/books.jpg",
    "assets/images/words/duck.jpg",
    "assets/images/words/icecream.jpg"
],
choices:[
   "TEDDY",
    "BOOKS",
    "DUCK",
    "ICE-CREAM"
],
correct: "ICE-CREAM"

},
{
letterText:"'H'",
question:"Choose the picture of the word that starts with the letter 'H'?",
qimage:"assets/images/letters/Hh.jpg",
images:[
    "assets/images/words/hat.jpg",
    "assets/images/words/eggs.jpg",
    "assets/images/words/bird.jpg",
    "assets/images/words/alligator.jpg"
],
choices:[
    "HAT",
    "EGGS",
    "BIRD",
    "ALLIGATOR"
],
correct: "HAT"

},
{
letterText:"'C'",
question:"Choose the picture of the word that starts with the letter 'C'?",
qimage:"assets/images/letters/Cc.jpg",
images:[
"assets/images/words/dinosaur.jpg",
"assets/images/words/zebra.jpg",
"assets/images/words/cat.jpg",
"assets/images/words/squirrel.jpg",
],
choices:[
    "DINOSAUR",
    "ZEBRA",
    "CAT",
    "SQUIRREL"
],
correct: "CAT"

},
{
letterText:"'K'",
question:"Choose the picture of the word that starts with the letter 'K'?",
qimage:"assets/images/letters/Kk.jpg",
images: [
"assets/images/words/ball.jpg",
"assets/images/words/fox.jpg",
"assets/images/words/kite.jpg",
"assets/images/words/tiger.jpg"
],
choices:[
    "BALL",
    "FOX",
    "KITE",
    "TIGER"
],
correct: "KITE"

},
{
letterText:"'O'",
question:"Choose the picture of the word that starts with the letter 'O'?",
qimage:"assets/images/letters/Oo.jpg",
images:[
"assets/images/words/bear.jpg",
"assets/images/words/octopus.jpg",
"assets/images/words/iguana.jpg",
"assets/images/words/jellyfish.jpg",
],
choices:[
    "BEAR",
    "OCTOPUS",
    "IGUANA",
    "JELLYFISH"
],
correct: "OCTOPUS"

},
{
letterText:"'P'",
question:"Choose the picture of the word that starts with the letter 'P'?",
qimage:"assets/images/letters/Pp.jpg",
images:["assets/images/words/leaf.jpg",
"assets/images/words/cake.jpg",
"assets/images/words/ladybird.jpg",
"assets/images/words/pig.jpg"
],
choices:[
    "LEAF",
    "CAKE",
    "LADYBIRD",
    "PIG"
],
correct: "PIG"

},
{
letterText:"'L'",
question:"Choose the picture of the word that starts with the letter 'L'?",
qimage:"assets/images/letters/Ll.jpg",
images:[
    "assets/images/words/banana.jpg",
    "assets/images/words/dog.jpg",
    "assets/images/words/lion.jpg",
    "assets/images/words/rainbow.jpg"
],
choices:[
    "BANANA",
    "DOG",
    "LION",
    "RAINBOW"
],
correct: "LION"

},
{
letterText:"'E'",
question:"Choose the picture of the word that starts with the letter 'E'?",
qimage:"assets/images/letters/Ee.jpg",
images:[
    "assets/images/words/elephant.jpg",
    "assets/images/words/fish.jpg",
    "assets/images/words/kangaroo.jpg",
    "assets/images/words/seal.jpg"
],
choices:[
    "ELEPHANT",
    "FISH",
    "KANGAROO",
    "SEAL"
],
correct: "ELEPHANT"

},
{
letterText:"'G'",
question:"Choose the picture of the word that starts with the letter 'G'?",
qimage:"assets/images/letters/Gg.jpg",
images:[
    "assets/images/words/penguin.jpg",
    "assets/images/words/monkey.jpg",
    "assets/images/words/orange.jpg",
    "assets/images/words/giraffe.jpg"
],
choices:[
    "PENGUIN",
    "MONKEY",
    "ORANGE",
    "GIRAFFE"
],
correct: "GIRAFFE" 

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
    //let currentQuestionIndex = Math.floor(Math.random() * questions.length);
    for(let i=0; i<questions.length; i++){

    let q = questions[currentQuestion];

    lText.innerHTML = `<h3> This is the letter ${q.letterText} </h3>`;

    question.innerHTML = `<h3> ${q.question} </h3>`;
    
    qImg.innerHTML = `<img src= ${q.qimage} >`;

    choiceA.innerHTML = `<img src = ${q.images[0]} >`;

    textA.innerHTML =  `<input type= "radio" name = "choice" id="choiceA" value = correct/><label for="choiceA">${q.choices[0]}</label>`;
            
    choiceB.innerHTML = `<img src = ${q.images[1]} >`;

    textB.innerHTML = `<input type= "radio" name ="choice"id="choiceB"/><label for="choiceB">${q.choices[1]}</label>`;

    choiceC.innerHTML = `<img src = ${q.images[2]} >`;

    textC.innerHTML = `<input type= "radio" name="choice" id="choiceC"/><label for="choiceC">${q.choices[2]}</label>`;

    choiceD.innerHTML = `<img src = ${q.images[3]} >`;

    textD.innerHTML = `<input type= "radio" name "choice "id="choiceD"/><label for="choiceD">${q.choices[3]}</label>`;
    }
}

function nextQuestion(){

    renderQuestion(questions[currentQuestion ++])

}

answerContainer.addEventListener('click', checkAnswer)
let answer = questions[currentQuestion].correct.checked ===true

function checkAnswer(selectedAnswer) {

  if(selectedAnswer == questions[currentQuestion].correct){
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


console.log(questions[currentQuestion].correct);
