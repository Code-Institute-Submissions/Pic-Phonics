const playButton = document.getElementById('playGame')
const leaveButton = document.getElementById('btn-leave')
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
choiceA:"assets/images/words/treeT.jpg",
textA:"Tree",
choiceB:"assets/images/words/watermelon.jpg",
textB:"Watermelon",
choiceC:"assets/images/words/mouse.jpg",
textC:"Mouse",
choiceD:"assets/images/words/pumpkin.jpg",
textD:"Pumpkin",
answer: "choiceA"

},
{
question:"Which picture begins with the letter A?",
qimage:"assets/images/letters/Aa.jpg",
choiceA:"umbrella.jpg",
choiceB:"grapes.jpg",
choiceC:"tractor.jpg",
choiceD:"apple alt.jpg",
answer: "choiceD"
},
{
question:"Which picture begins with the letter S?",
image:"Ss.jpg",
choiceA:"car.jpg",
choiceB:"snake.jpg",
choiceC:"flower.jpg",
choiceD:"whale.jpg",
answer: "choiceB"

},
{
question:"Which picture begins with the letter M?",
qimage:"Mm.jpg",
choiceA:"",
choiceB:"",
choiceC:"mouse.jpg",
choiceD:"",
answer: "choiceC"

},
{
question:"Which picture begins with the letter I?",
qimage:"Ii.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"igloo.jpg",
answer: "choiceD"

},
{
question:"Which picture begins with the letter H?",
qimage:"Hh.jpg",
choiceA:"hat alt.jpg",
choiceB:"eggs.jpg",
choiceC:"bird.jpg",
choiceD:"alligator.jpg",
answer: "choiceA"

},
{
question:"Which picture begins with the letter C?",
qimage:"Cc.jpg",
choiceA:"dinosaur.jpg",
choiceB:"zebra.jpg",
choiceC:"cat.jpg",
choiceD:"squirrel.jpg",
answer: "choiceC"

},
{
question:"Which picture begins with the word K?",
qimage:"Kk.jpg",
choiceA:"strawberry.jpg",
choiceB:"ostrich.jpg",
choiceC:"kite.jpg",
choiceD:"tiger.jpg",
answer: "choiceC"

},
{
question:"Which picture begins with the letter O?",
qimage:"Oo.jpg",
choiceA:"bear.jpg",
choiceB:"octopus.jpg",
choiceC:"iguana.jpg",
choiceD:"apple.jpg",
answer: "choiceB"

},
{
question:"Which picture begins with the letter P?",
qimage:"Pp.jpg",
choiceA:"queen.jpg",
choiceB:"volcano.jpg",
choiceC:"ladybird.jpg",
choiceD:"pig.jpg",
answer: "choiceD"

},
{
question:"Which picture begins with the letter L?",
qimage:"Ll.jpg",
choiceA:"banana.jpg",
choiceB:"dog.jpg",
choiceC:"lion.jpg",
choiceD:"rainbow.jpg",
answer: "choiceC"

},
{
question:"Which picture begins with the letter E?",
qimage:"Ee.jpg",
choiceA:"elephant.jpg",
choiceB:"fish.jpg",
choiceC:"kangaroo.jpg",
choiceD:"seal.jpg",
answer: "choiceA"

},
{
question:"Which picture begins with the letter G?",
qimage:"Gg.jpg",
choiceA:"penguin.jpg",
choiceB:"leaf.jpg",
choiceC:"orange.jpg",
choiceD:"giraffe.jpg",
answer: "choiceD"

},
]
const lastQuestion = questions.length - 1;

let runningQuestion = 0;

playButton.addEventListener('click', playGame)

function playGame() {
  playButton.classList.add('hide')
  document.getElementById("home").classList.add('hide')
  document.getElementById("overlay").classList.add('hide')
  currentQuestionIndex = 0
  gameContainer.classList.remove('hide')
 
    }

function renderQuestion(){

    let q = questions[runningQuestion];

    lText.innerHTML = "<h3>" + q.letterText +"</h3>";

    question.innerHTML = "<p>"+ q.question +"</p>";
    
    qImg.innerHTML = "<img src="+ q.qimage +">";

    choiceA.innerHTML = "<img src =" + q.choiceA + ">";

    textA.innerHTML = "<h3>" + q.textA +"</h3>";

    choiceB.innerHTML = "<img src =" + q.choiceB + ">";

    textB.innerHTML = "<h3>" + q.textB +"</h3>";

    choiceC.innerHTML = "<img src =" + q.choiceC + ">";

    textC.innerHTML = "<h3>" + q.textC +"</h3>";

    choiceD.innerHTML = "<img src =" + q.choiceD + ">";

    textD.innerHTML = "<h3>" + q.textD +"</h3>";

}

renderQuestion();
