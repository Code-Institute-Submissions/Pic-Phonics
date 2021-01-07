const playButton = document.getElementById("playGame")
const leaveButton = document.getElementById("leave")
const nextButton = document.getElementById("next")
const gameContainer = document.getElementById('game')
const questionContainer = document.getElementById('question')
const lText = document.getElementById("letterText");
const qImg = document.getElementById("qImage");
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
letterText:"This is the letter 'T'.",
question:"Choose the picture of the word that starts with the letter 'T'?",
qimage:"assets/images/letters/Tt.jpg",
choiceA:"assets/images/words/tree.jpg",
textA:"Tree",
choiceB:"assets/images/words/watermelon.jpg",
textB:"Watermelon",
choiceC:"assets/images/words/hippo.jpg",
textC:"Hippo",
choiceD:"assets/images/words/pumpkin.jpg",
textD:"Pumpkin",
answer: "choiceA"

},
{
question:"Which picture begins with the letter A?",
qimage:"assets/images/letters/Aa.jpg",
choiceA:"assets/images/words/umbrella.jpg",
textA:"Umbrella",
choiceB:"assets/images/words/grapes.jpg",
textB:"Grapes",
choiceC:"assets/images/words/socks.jpg",
textC:"Socks",
choiceD:"assets/images/words/apple.jpg",
textD:"Apple",
answer: "choiceD"
},
{
question:"Which picture begins with the letter S?",
image:"assets/images/letters/Ss.jpg",
choiceA:"assets/images/words/car.jpg",
textA:"Car",
choiceB:"assets/images/words/snake.jpg",
textB:"Snake",
choiceC:"assets/images/words/flower.jpg",
textC:"Flower",
choiceD:"assets/images/words/dolphin.jpg",
textD:"Dolphin",
answer: "choiceB"

},
{
question:"Which picture begins with the letter M?",
qimage:"assets/images/letters/Mm.jpg",
choiceA:"assets/images/words/rabbit.jpg",
textA:"Rabbit",
choiceB:"assets/images/words/carrot.jpg",
textB:"Carrot",
choiceC:"assets/images/words/mouse.jpg",
textC:"Mouse",
choiceD:"assets/images/words/bike.jpg",
textD:"Bike",
answer: "choiceC"

},
{
question:"Which picture begins with the letter I?",
qimage:"assets/images/letters/Ii.jpg",
choiceA:"assets/images/words/teddy.jpg",
textA:"Teddy",
choiceB:"assets/images/words/books.jpg",
textB:"Books",
choiceC:"assets/images/words/duck.jpg",
textC:"Duck",
choiceD:"assets/images/words/icecream.jpg",
textD:"Ice-cream",
answer: "choiceD"

},
{
question:"Which picture begins with the letter H?",
qimage:"assets/images/letters/Hh.jpg",
choiceA:"assets/images/words/hat.jpg",
textA:"Hat",
choiceB:"assets/images/words/eggs.jpg",
textB:"Eggs",
choiceC:"assets/images/words/bird.jpg",
textC:"Bird",
choiceD:"assets/images/words/alligator.jpg",
textD:"Alligator",
answer: "choiceA"

},
{
question:"Which picture begins with the letter C?",
qimage:"assets/images/letters/Cc.jpg",
choiceA:"assets/images/words/dinosaur.jpg",
textA:"Dinosaur",
choiceB:"assets/images/words/zebra.jpg",
textB:"Zebra",
choiceC:"assets/images/words/cat.jpg",
textC:"Cat",
choiceD:"assets/images/words/squirrel.jpg",
textD:"Squirrel",
answer: "choiceC"

},
{
question:"Which picture begins with the word K?",
qimage:"assets/images/letters/Kk.jpg",
choiceA:"assets/images/words/ball.jpg",
textA:"Ball",
choiceB:"assets/images/words/fox.jpg",
textB:"Fox",
choiceC:"assets/images/words/kite.jpg",
textC:"Kite",
choiceD:"assets/images/words/tiger.jpg",
textD:"Tiger",
answer: "choiceC"

},
{
question:"Which picture begins with the letter O?",
qimage:"assets/images/letter/Oo.jpg",
choiceA:"assets/images/words/bear.jpg",
textA:"Bear",
choiceB:"assets/images/words/octopus.jpg",
textB:"Octopus",
choiceC:"assets/images/words/iguana.jpg",
textC:"Iguana",
choiceD:"assets/images/words/jellyfish.jpg",
textD:"Jellyfish",
answer: "choiceB"

},
{
question:"Which picture begins with the letter P?",
qimage:"assets/images/letters/Pp.jpg",
choiceA:"assets/images/words/leaf.jpg",
textA:"Leaf",
choiceB:"assets/images/words/cake.jpg",
textB:"Cake",
choiceC:"assets/images/words/ladybird.jpg",
textC:"Ladybird",
choiceD:"assets/images/words/pig.jpg",
textD:"Pig",
answer: "choiceD"

},
{
question:"Which picture begins with the letter L?",
qimage:"assets/images/letters/Ll.jpg",
choiceA:"assets/images/words/banana.jpg",
textA:"Banana",
choiceB:"assets/images/words/dog.jpg",
textB:"Dog",
choiceC:"assets/images/words/lion.jpg",
textC:"Lion",
choiceD:"assets/images/words/rainbow.jpg",
textD:"Rainbow",
answer: "choiceC"

},
{
question:"Which picture begins with the letter E?",
qimage:"assets/images/letters/Ee.jpg",
choiceA:"assets/images/words/elephant.jpg",
textA:"Elephant",
choiceB:"assets/images/words/fish.jpg",
textB:"Fish",
choiceC:"assets/images/words/kangaroo.jpg",
textC:"Kangaroo",
choiceD:"assets/images/words/seal.jpg",
textD:"Seal",
answer: "choiceA"

},
{
question:"Which picture begins with the letter G?",
qimage:"assets/images/letters/Gg.jpg",
choiceA:"assets/images/words/penguin.jpg",
textA:"Penguin",
choiceB:"assets/images/words/monkey.jpg",
textB:"Monkey",
choiceC:"assets/images/words/orange.jpg",
textC:"Orange",
choiceD:"assets/images/words/giraffe.jpg",
textD:"Giraffe",
answer: "choiceD"

},
]
const lastQuestion = questions.length - 1;

let currentQuestion = 0;

playButton.addEventListener('click', playGame)

function playGame() {
  playButton.classList.add('hide')
  document.getElementById("home").classList.add('hide')
  document.getElementById("overlay").classList.add('hide')
  currentQuestionIndex = 0
  gameContainer.classList.remove('hide')
 
    }

function renderQuestion(){

    let q = questions[currentQuestion];

    lText.innerHTML = `<h3>  ${q.letterText}  </h3>`;

    question.innerHTML = `<p> ${q.question} </p>`;
    
    qImg.innerHTML = `<img src= ${q.qimage} >`;

    choiceA.innerHTML = `<img src = ${q.choiceA} >`;

    textA.innerHTML = `<h3> ${q.textA} </h3>`;

    choiceB.innerHTML = `<img src = ${q.choiceB} >`;

    textB.innerHTML = `<h3> ${q.textB} </h3>`;

    choiceC.innerHTML = `<img src = ${q.choiceC} >`;

    textC.innerHTML = `<h3> ${q.textC} </h3>`;

    choiceD.innerHTML = `<img src = ${q.choiceD} >`;

    textD.innerHTML = `<h3> ${q.textD} </h3>`;

}

renderQuestion();

nextButton.addEventListener('click', nextQuestion)

function nextQuestion(){
   
    renderQuestion(question[currentQuestion ++])
}

function selectAnswer(){

}