//Variables for game
const playButton = document.getElementById("playGame")
const playLink = document.getElementById("play")
const exitLink = document.getElementById("leave")
//const nextButton = document.getElementById("next")
const submitButton = document.getElementById("submit")
const gameContainer = document.getElementById('game')
const questionContainer = document.getElementById('question')
const qImg = document.getElementById("qImage")
const lText = document.getElementById("letterText")
const answerContainer = document.getElementById('answers')
const choices = document.querySelectorAll('input[name="choices"]')
const imageA = document.getElementById("imageA")
const choiceA = document.getElementById("choiceA")
const imageB = document.getElementById("imageB")
const choiceB = document.getElementById("choiceB")
const imageC = document.getElementById("imageC")
const choiceC = document.getElementById("choiceC")
const imageD = document.getElementById("imageD")
const choiceD = document.getElementById("choiceD")
const scoreCount = document.getElementById("score")
const resultsContainer = document.getElementById('result')
const scoreContainer = document.getElementById('scoreContainer')
const exit = document.getElementById("exit")
const restart = document.getElementById("quizRepeat")
const cert = document.getElementById("cert")
const certScore = document.getElementById("certScore")
const form = document.getElementById("certForm")
let score = 0;

//Questions Object Array
const questions = [
{
letterText:"'T'",
question:"Choose the picture of the word that starts with the letter 'T'?",
qimage:"assets/images/letters/Tt.jpg",
audio: "assets/audio/t.mp3",
imageA: "assets/images/words/tree.jpg",
imageB: "assets/images/words/watermelon.jpg",
imageC: "assets/images/words/hippo.jpg",
imageD: "assets/images/words/pumpkin.jpg",
choiceA:"TREE",
choiceB:"WATERMELON",
choiceC:"HIPPO",
choiceD:"PUMPKIN",
correct: choiceA

},
{
letterText:"'A'",
question:"Choose the picture of the word that starts with the letter 'A'?",
qimage: "assets/images/letters/Aa.jpg",
audio: "assets/audio/a.mp3",
imageA: "assets/images/words/umbrella.jpg",
imageB: "assets/images/words/grapes.jpg",
imageC: "assets/images/words/socks.jpg",
imageD: "assets/images/words/apple.jpg",
choiceA: "UMBRELLA",
choiceB: "GRAPES",
choiceC: "SOCKS",
choiceD:"APPLE",

correct:choiceD
},
{
letterText:"'S'",
question:"Choose the picture of the word that starts with the letter 'S'?",
qimage:"assets/images/letters/Ss.jpg",
audio: "assets/audio/s.mp3",
imageA: "assets/images/words/car.jpg",
imageB: "assets/images/words/snake.jpg",
imageC: "assets/images/words/flower.jpg",
imageD: "assets/images/words/dolphin.jpg",
choiceA: "CAR",
choiceB: "SNAKE",
choiceC: "FLOWER",
choiceD: "DOLPHIN",

correct: choiceB

},
{
letterText:"'M'",
question:"Choose the picture of the word that starts with the letter 'M'?",
qimage: "assets/images/letters/Mm.jpg",
audio: "assets/audio/m.mp3",
imageA: "assets/images/words/rabbit.jpg",
imageB: "assets/images/words/carrot.jpg",
imageC: "assets/images/words/mouse.jpg",
imageD: "assets/images/words/bike.jpg",
choiceA: "RABBIT",
choiceB: "CARROT",
choiceC: "MOUSE",
choiceD: "BIKE",

correct: choiceC

},
{
letterText:"'I'",
question:"Choose the picture of the word that starts with the letter 'I'?",
qimage:"assets/images/letters/Ii.jpg",
audio: "assets/audio/i.mp3",
imageA: "assets/images/words/teddy.jpg",
imageB: "assets/images/words/books.jpg",
imageC: "assets/images/words/duck.jpg",
imageD: "assets/images/words/icecream.jpg",
choiceA: "TEDDY",
choiceB: "BOOKS",
choiceC: "DUCK",
choiceD: "ICE-CREAM",

correct: choiceD
},
{
letterText:"'H'",
question:"Choose the picture of the word that starts with the letter 'H'?",
qimage:"assets/images/letters/Hh.jpg",
audio: "assets/audio/h.mp3",
imageA: "assets/images/words/hat.jpg",
imageB: "assets/images/words/eggs.jpg",
imageC: "assets/images/words/bird.jpg",
imageD: "assets/images/words/alligator.jpg",
choiceA: "HAT",
choiceB: "EGGS",
choiceC: "BIRD",
choiceD: "ALLIGATOR",

correct: choiceA
},
{
letterText:"'C'",
question:"Choose the picture of the word that starts with the letter 'C'?",
qimage:"assets/images/letters/Cc.jpg",
audio: "assets/audio/c.mp3",
imageA: "assets/images/words/dinosaur.jpg",
imageB: "assets/images/words/zebra.jpg",
imageC: "assets/images/words/cat.jpg",
imageD: "assets/images/words/squirrel.jpg",
choiceA: "DINOSAUR",
choiceB: "ZEBRA",
choiceC: "CAT",
choiceD: "SQUIRREL",

correct: choiceC
},
{
letterText:"'K'",
question:"Choose the picture of the word that starts with the letter 'K'?",
qimage:"assets/images/letters/Kk.jpg",
audio: "assets/audio/k.mp3",
imageA: "assets/images/words/ball.jpg",
imageB: "assets/images/words/fox.jpg",
imageC: "assets/images/words/tiger.jpg",
imageD: "assets/images/words/kite.jpg",
choiceA: "BALL",
choiceB: "FOX",
choiceC: "TIGER",
choiceD: "KITE",

correct: choiceD

},
{
letterText:"'O'",
question:"Choose the picture of the word that starts with the letter 'O'?",
qimage:"assets/images/letters/Oo.jpg",
audio: "assets/audio/o.mp3",
imageA: "assets/images/words/bear.jpg",
imageB: "assets/images/words/octopus.jpg",
imageC: "assets/images/words/iguana.jpg",
imageD: "assets/images/words/jellyfish.jpg",
choiceA: "BEAR",
choiceB: "OCTOPUS",
choiceC: "IGUANA",
choiceD: "JELLYFISH",

correct: choiceB
},
{
letterText:"'P'",
question:"Choose the picture of the word that starts with the letter 'P'?",
qimage:"assets/images/letters/Pp.jpg",
audio: "assets/audio/p.mp3",
imageA: "assets/images/words/leaf.jpg",
imageB: "assets/images/words/cake.jpg",
imageC: "assets/images/words/ladybird.jpg",
imageD: "assets/images/words/pig.jpg",
choiceA: "LEAF",
choiceB: "CAKE",
choiceC: "LADYBIRD",
choiceD: "PIG",

correct: choiceD
},
{
letterText:"'L'",
question:"Choose the picture of the word that starts with the letter 'L'?",
qimage:"assets/images/letters/Ll.jpg",
audio: "assets/audio/l.mp3",
imageA: "assets/images/words/lion.jpg",
imageB: "assets/images/words/banana.jpg",
imageC: "assets/images/words/dog.jpg",
imageD: "assets/images/words/rainbow.jpg",
choiceA: "LION",
choiceB: "BANANA",
choiceC: "DOG",
choiceD: "RAINBOW",

correct: choiceA
},
{
letterText:"'E'",
question:"Choose the picture of the word that starts with the letter 'E'?",
qimage:"assets/images/letters/Ee.jpg",
audio: "assets/audio/e.mp3",
imageA: "assets/images/words/fish.jpg",
imageB: "assets/images/words/elephant.jpg",
imageC: "assets/images/words/kangaroo.jpg",
imageD: "assets/images/words/seal.jpg",
choiceA: "FISH",
choiceB: "ELEPHANT",
choiceC: "KANGAROO",
choiceD: "SEAL",

correct: choiceB
},
{
letterText:"'G'",
question:"Choose the picture of the word that starts with the letter 'G'?",
qimage:"assets/images/letters/Gg.jpg",
audio: "assets/audio/g.mp3",
imageA: "assets/images/words/penguin.jpg",
imageB: "assets/images/words/monkey.jpg",
imageC: "assets/images/words/orange.jpg",
imageD: "assets/images/words/giraffe.jpg",
choiceA: "PENGUIN",
choiceB: "MONKEY",
choiceC: "ORANGE",
choiceD: "GIRAFFE",

correct: choiceD
},
]

let currentQuestion = 0;
const lastQuestion = questions.length - 1;

//Event Listeners
playButton.addEventListener('click', playGame)
//nextButton.addEventListener('click', nextQuestion)

//Initiates the game
function playGame() {
  playButton.classList.add('hide')
  document.getElementById("home").classList.add('hide')
  document.getElementById("overlay").classList.add('hide')
  document.getElementById("background").classList.remove('hide')
  currentQuestionIndex = 0
  score = 0
  gameContainer.classList.remove('hide')
  renderQuestion()

 }

//Renders questions and answers to the screen
function renderQuestion(){
    for(let i=0; i<questions.length; i++){

    let q = questions[currentQuestion];
        
    lText.innerHTML = `<h3> This is the letter ${q.letterText} </h3>`;

    question.innerHTML = `<h3> ${q.question} </h3>`;
    
    qImg.innerHTML = `<img src= ${q.qimage} >`;

    imageA.innerHTML = `<img src = ${q.imageA} >`;

    document.getElementById("A").innerHTML =  q.choiceA;

    imageB.innerHTML = `<img src = ${q.imageB} >`;
    
    document.getElementById("B").innerHTML =  q.choiceB;

    imageC.innerHTML = `<img src = ${q.imageC} >`;

    document.getElementById("C").innerHTML =  q.choiceC;

    imageD.innerHTML = `<img src = ${q.imageD} >`;

    document.getElementById("D").innerHTML =  q.choiceD;

    scoreCount.innerHTML=`Score: ${score}`;
    
    }
    //Hides radio button labels text
    document.getElementById("A").style.display = 'none';
    document.getElementById("B").style.display = 'none';
    document.getElementById("C").style.display = 'none';
    document.getElementById("D").style.display = 'none';
    //playAudio(questions[currentQuestion].audio);
    setAudio();
}

//Renders the next question in the quiz
function nextQuestion(){
     if(currentQuestion == questions.length - 1){
         submitButton.classList.remove('hide');
     }
     else{
        renderQuestion(questions[currentQuestion++]); //+ questions[currentQuestion].audio)
        setAudio();
     }
}

//Functions to locate and play audio files
function playAudio(file){
    let playFile = new Audio(file);
    playFile.play();
  }
  
  function setAudio(){
    let audioFile = questions[currentQuestion].audio
    let sounds = "playAudio(\'" + audioFile + "\')";
    document.getElementById('sound').setAttribute('onclick', sounds);
  }

// Checks  if answer users selects is correct or incorrect
function checkAnswer() {

const correctAnswer = questions[currentQuestion].correct
if (document.querySelector('input[name = "choices"]:checked') == correctAnswer){
    //if (correctAnswer.checked == true){
    // answer is correct
    score ++;
      
    correct();
    //Reveals radio button labels when answer is selected
    document.getElementById("A").style.display = 'block';
    document.getElementById("B").style.display = 'block';
    document.getElementById("C").style.display = 'block';
    document.getElementById("D").style.display = 'block';
    //Sets timeout delay before next question is rendered
    setTimeout(function(){
        nextQuestion();
    }, 4000); 

  } else {
    // answer is incorrect
    incorrect();
    document.getElementById("A").style.display = 'block';
    document.getElementById("B").style.display = 'block';
    document.getElementById("C").style.display = 'block';
    document.getElementById("D").style.display = 'block';
    //Sets a time delay before next question is rendered
     setTimeout(function(){
        nextQuestion();
    }, 4000); 
 
  }
}

// Alert if user selects correct answer
function correct() {

Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Correct! Well Done!',
  text:'Keep up the good work!',
  showConfirmButton: false,
  timer: 2000
})
 
}

// Alert if user selects incorrect answer
function incorrect() {
Swal.fire({
  position: 'center',
  icon: 'error',
  title: 'Incorrect',
  text:'Do not worry you are just learning! Keep trying, you will get it next time.',
  showConfirmButton: false,
  timer: 2200
})
  
}

//Shows the users result on completion of the quiz in percentage format
function showResult( ){
    gameContainer.classList.add('hide');
    document.getElementById("background").classList.add('hide')
    resultsContainer.classList.remove('hide');
    let totalScore = (score/questions.length * 100).toFixed();
    scoreContainer.innerHTML = `<h3> You  scored ${totalScore}% in Pic Phonics Initial Sounds Game</<h3>`;

        localStorage.setItem("score",totalScore);
}

//Function to exit the game when all questions are completed
exitLink.addEventListener("click", exitGame)
exit.addEventListener("click", exitGame);

function exitGame() {
    Swal.fire({
  title: 'Are you sure you want to leave?',
  showCancelButton: true,
  confirmButtonText: `Leave`,
}).then((result) => {
  if (result.isConfirmed) {
    location.href= "index.html"
}});
}

//Bootstrap Form Validation
    cert.addEventListener('click', function(validate) {
        if (cert.checkValidity() === false) {
          validate.preventDefault();
          validate.stopPropagation();
        }
       else{
form.classList.add('was-validated');
       }
    });

//Restarts Quiz
playLink.addEventListener("click", restartQuiz)
restart.addEventListener("click", restartQuiz)

function restartQuiz(){
     gameContainer.classList.remove('hide');
    resultsContainer.classList.add('hide');

    
function resetGame() {
         submitButton.classList.add('hide');
        currentQuestion = 0;
        score = 0
        playGame()
    };
    resetGame();
}
  
//Cert Result JS - Gets input values and inserts onto certificate html
function getName() {
        let firstName = document.getElementById("fname").value;
        let lastName = document.getElementById("lname").value;
        localStorage.setItem("fname", firstName);
        localStorage.setItem("lname", lastName);
      }
      function loadName() {
        let firstName = localStorage.getItem("fname");
        document.getElementById("fname").value = firstName;

       let lastName = localStorage.getItem("lname");
         document.getElementById("lname").value = lastName;
      }

     
