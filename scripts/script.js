/* jshint esversion: 8 */
//Variables for game
const playButton = document.getElementById("playGame");
const playLink = document.getElementById("play");
const exitLink = document.getElementById("leave");
const submitButton = document.getElementById("submit");
const gameContainer = document.getElementById('game');
const questionImageDirectory = "assets/images/letters/";
const choiceImageDirectory = "assets/images/words/";
const questionContainer = document.getElementById('question');
const qImg = document.getElementById("qImage");
const lText = document.getElementById("letterText");
const TextA = document.getElementById('A');
const TextB = document.getElementById('B');
const TextC = document.getElementById('C');
const TextD = document.getElementById('D');
const imageA = document.getElementById("imageA");
const choiceA = document.getElementById("choiceA");
const imageB = document.getElementById("imageB");
const choiceB = document.getElementById("choiceB");
const imageC = document.getElementById("imageC");
const choiceC = document.getElementById("choiceC");
const imageD = document.getElementById("imageD");
const choiceD = document.getElementById("choiceD");
const scoreCount = document.getElementById("score");
const resultsContainer = document.getElementById('result');
const scoreContainer = document.getElementById('scoreContainer');
const exit = document.getElementById("exit");
const restart = document.getElementById("quizRepeat");
const cert = document.getElementById("cert");
const certScore = document.getElementById("certScore");
const form = document.getElementById("certForm");
let score = 0;

//Questions Object Array
const questions = [
{
letterText:"'T'",
question:"Choose the picture of the word that starts with the letter 'T'?",
qimage:"Tt.jpg",
audio: "assets/audio/t.mp3",
choices:[
    {
        imageFile:"tree.jpg",
        choiceText: "TREE",
    },
    {
        imageFile:"watermelon.jpg",
        choiceText: "WATERMELON",
    },
    {
        imageFile:"hippo.jpg",
        choiceText: "HIPPO",
    },
    {
        imageFile:"pumpkin.jpg",
        choiceText: "PUMPKIN",
    },
],
correct:choiceA
},
{
letterText:"'A'",
question:"Choose the picture of the word that starts with the letter 'A'?",
qimage: "Aa.jpg",
audio: "assets/audio/a.mp3",
choices: [
    {
        imageFile:"umbrella.jpg",
        choiceText: "UMBRELLA",
    },
    {
        imageFile:"grapes.jpg",
        choiceText: "GRAPES",
    },
    {
        imageFile:"socks.jpg",
        choiceText: "SOCKS",
    },
    {
        imageFile:"apple.jpg",
        choiceText: "APPLE",
    }
],
correct: choiceD
},
{
letterText:"'S'",
question:"Choose the picture of the word that starts with the letter 'S'?",
qimage:"Ss.jpg",
audio: "assets/audio/s.mp3",
choices: [
    {
        imageFile:"car.jpg",
        choiceText: "CAR",
    },
    {
        imageFile:"snake.jpg",
        choiceText: "SNAKE",
    },
    {
        imageFile:"flower.jpg",
        choiceText: "FLOWER",
    },
    {
        imageFile:"dolphin.jpg",
        choiceText: "DOLPHIN",
    }
],
correct: choiceB
},
{
letterText:"'M'",
question:"Choose the picture of the word that starts with the letter 'M'?",
qimage: "Mm.jpg",
audio: "assets/audio/m.mp3",
choices: [
    {
        imageFile:"rabbit.jpg",
        choiceText: "RABBIT"
    },
    {
        imageFile:"carrot.jpg",
        choiceText: "CARROT"
    },
    {
        imageFile:"mouse.jpg",
        choiceText: "MOUSE"
    },
    {
        imageFile:"bike.jpg",
        choiceText: "BIKE"
    }
],
correct:choiceC
},
{
letterText:"'I'",
question:"Choose the picture of the word that starts with the letter 'I'?",
qimage:"Ii.jpg",
audio: "assets/audio/i.mp3",
choices: [
    {
        imageFile:"teddy.jpg",
        choiceText: "TEDDY"
    },
    {
        imageFile:"books.jpg",
        choiceText: "BOOKS"
    },
    {
        imageFile:"duck.jpg",
        choiceText: "DUCK"
    },
    {
        imageFile:"icecream.jpg",
        choiceText: "ICE-CREAM",
    }
],
correct:choiceD
},
{
letterText:"'H'",
question:"Choose the picture of the word that starts with the letter 'H'?",
qimage:"Hh.jpg",
audio: "assets/audio/h.mp3",
choices: [
    {
        imageFile:"hat.jpg",
        choiceText: "HAT"
    },
    {
        imageFile:"eggs.jpg",
        choiceText: "EGGS"
    },
    {
        imageFile:"bird.jpg",
        choiceText: "BIRD"
    },
    {
        imageFile:"alligator.jpg",
        choiceText: "ALLIGATOR",
    }
],
correct:choiceA
},
{
letterText:"'C'",
question:"Choose the picture of the word that starts with the letter 'C'?",
qimage:"Cc.jpg",
audio: "assets/audio/c.mp3",
choices: [
    {
        imageFile:"dinosaur.jpg",
        choiceText: "DINOSAUR"
    },
    {
        imageFile:"zebra.jpg",
        choiceText: "ZEBRA"
    },
    {
        imageFile:"cat.jpg",
        choiceText: "CAT"
    },
    {
        imageFile:"squirrel.jpg",
        choiceText: "SQUIRREL"
    }
],
correct:choiceC
},
{
letterText:"'K'",
question:"Choose the picture of the word that starts with the letter 'K'?",
qimage:"Kk.jpg",
audio: "assets/audio/k.mp3",
choices: [
    {
        imageFile:"ball.jpg",
        choiceText: "BALL",
    },
    {
        imageFile:"fox.jpg",
        choiceText: "FOX",
    },
    {
        imageFile:"tiger.jpg",
        choiceText: "TIGER",
    },
    {
        imageFile:"kite.jpg",
        choiceText: "KITE",
    }
],
correct: choiceD
},
{
letterText:"'O'",
question:"Choose the picture of the word that starts with the letter 'O'?",
qimage:"Oo.jpg",
audio: "assets/audio/o.mp3",
choices: [
    {
        imageFile:"bear.jpg",
        choiceText: "BEAR",
    },
    {
        imageFile:"octopus.jpg",
        choiceText: "OCTOPUS",
    },
    {
        imageFile:"iguana.jpg",
        choiceText: "IGUANA",
    },
    {
        imageFile:"jellyfish.jpg",
        choiceText: "JELLYFISH",
    }
],
correct:choiceB
},
{
letterText:"'P'",
question:"Choose the picture of the word that starts with the letter 'P'?",
qimage:"Pp.jpg",
audio: "assets/audio/p.mp3",
choices: [
    {
        imageFile:"leaf.jpg",
        choiceText: "LEAF",
    },
    {
        imageFile:"cake.jpg",
        choiceText: "CAKE",
    },
    {
        imageFile:"ladybird.jpg",
        choiceText: "LADYBIRD",
    },
    {
        imageFile:"pig.jpg",
        choiceText: "PIG",
    }
],
correct:choiceD

},
{
letterText:"'L'",
question:"Choose the picture of the word that starts with the letter 'L'?",
qimage:"Ll.jpg",
audio: "assets/audio/l.mp3",
choices: [
    {
        imageFile:"lion.jpg",
        choiceText: "LION"
    },
    {
        imageFile:"banana.jpg",
        choiceText: "BANANA"
    },
    {
        imageFile:"dog.jpg",
        choiceText: "DOG"
    },
    {
        imageFile:"rainbow.jpg",
        choiceText: "RAINBOW",
    }
],
correct:choiceA
},
{
letterText:"'E'",
question:"Choose the picture of the word that starts with the letter 'E'?",
qimage:"Ee.jpg",
audio: "assets/audio/e.mp3",
choices: [
    {
        imageFile:"fish.jpg",
        choiceText: "FISH"
    },
    {
        imageFile:"elephant.jpg",
        choiceText: "ELEPHANT"
    },
    {
        imageFile:"kangaroo.jpg",
        choiceText: "KANGAROO"
    },
    {
        imageFile:"seal.jpg",
        choiceText: "SEAL"
    }
],
correct:choiceB
},
{
'letterText':"'G'",
'question':"Choose the picture of the word that starts with the letter 'G'?",
'qimage':"Gg.jpg",
'audio': "assets/audio/g.mp3",
'choices': [
    {
        imageFile:"penguin.jpg",
        choiceText: "PENGUIN"
    },
    {
        imageFile:"monkey.jpg",
        choiceText: "MONKEY"
    },
    {
        imageFile:"orange.jpg",
        choiceText: "ORANGE"
    },
    {
        imageFile:"giraffe.jpg",
        choiceText: "GIRAFFE"
    }
],
correct:choiceD,
}
];

let currentQuestion = 0;
const lastQuestion = questions.length - 1;

//Event Listeners
playButton.addEventListener('click', playGame);

//Initiates the game
function playGame() {
  playButton.classList.add('hide');
  document.getElementById("home").classList.add('hide');
  document.getElementById("overlay").classList.add('hide');
  document.getElementById("background").classList.remove('hide');
  currentQuestionIndex = 0;
  score = 0;
  gameContainer.classList.remove('hide');
  renderQuestion();

 }

//Renders questions and answers to the screen
function renderQuestion(){
    for(let i=0; i<questions.length; i++){

    let q = questions[currentQuestion];

     //Questions   
    lText.innerHTML = `<h3> This is the letter ${q.letterText} </h3>`;
    question.innerHTML = `<h3> ${q.question} </h3>`;
    qImg.innerHTML = `<img src= ${questionImageDirectory}${q.qimage} alt = ${q.letterText} >`;

    //Choices
    imageA.src = `${choiceImageDirectory}${q.choices[0].imageFile}`;
    imageA.alt = q.choices[0].choiceText;
    TextA.innerText =  q.choices[0].choiceText;
    TextA.classList.add("hide");
    imageB.src = `${choiceImageDirectory}${q.choices[1].imageFile}`;
    imageB.alt = q.choices[1].choiceText;
    TextB.innerText =  q.choices[1].choiceText;
    TextB.classList.add("hide");
    imageC.src =` ${choiceImageDirectory}${q.choices[2].imageFile}`;
    imageC.alt = q.choices[2].choiceText;
    TextC.innerText = q.choices[2].choiceText;
    TextC.classList.add("hide");
    imageD.src = `${choiceImageDirectory}${q.choices[3].imageFile}`;
    imageD.alt = q.choices[3].choiceText;
    TextD.innerText = q.choices[3].choiceText;
    TextD.classList.add("hide");
    
    //Score Counter
    scoreCount.innerHTML=`Score: ${score}`;
    
    }
    setAudio();
}

//Renders the next question in the quiz
function nextQuestion(){
     if(currentQuestion == questions.length - 1){
         submitButton.classList.remove('hide');
     }
     else{
        renderQuestion(questions[currentQuestion++]);
        setAudio();
     }
};

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

const choiceContainer = document.querySelector("#answers");
const allChoices = choiceContainer.querySelectorAll("input","img")
allChoices.forEach((choice) => {
    choice.addEventListener("click", checkAnswer);
});

// Checks  if answer users selects is correct or incorrect
function checkAnswer() {

    const correctAnswer = questions[currentQuestion].correct;
    
    if (document.querySelector('input[name = "choices"]:checked') == correctAnswer) {
        // answer is correct
        score++;

        correct();

        //Reveals radio button labels when answer is selected
        document.getElementById("A").classList.remove('hide');
        document.getElementById("B").classList.remove('hide');
        document.getElementById("C").classList.remove('hide');
        document.getElementById("D").classList.remove('hide');
        //Sets timeout delay before next question is rendered
        setTimeout(function () {
            nextQuestion();
        }, 4000);

    } else {
        // answer is incorrect
        incorrect();

        document.getElementById("A").classList.remove('hide');
        document.getElementById("B").classList.remove('hide');
        document.getElementById("C").classList.remove('hide');
        document.getElementById("D").classList.remove('hide');
        //Sets a time delay before next question is rendered
        setTimeout(function () {
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
    });
 
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
});
  
}

//Shows the users result on completion of the quiz in percentage format
function showResult( ){
    gameContainer.classList.add('hide');
    //document.getElementById("background").classList.add('hide');
    resultsContainer.classList.remove('hide');
    let totalScore = (score/questions.length * 100).toFixed();
    scoreContainer.innerHTML = `<h3> You  scored ${totalScore}% in Pic Phonics Initial Sounds Game</<h3>`;

        localStorage.setItem("score",totalScore);
}

//Function to exit the game when all questions are completed
exitLink.addEventListener("click", exitGame);
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
playLink.addEventListener("click", restartQuiz);
restart.addEventListener("click", restartQuiz);

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

     
