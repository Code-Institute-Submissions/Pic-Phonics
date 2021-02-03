/* jshint esversion: 8 */

/**@global Constants & Variables used for game*/

const playButton = document.getElementById("playGame");
const playLink = document.getElementById("play");
const exitLink = document.getElementById("leave");
const submitButton = document.getElementById("submit");
const gameContainer = document.getElementById('game');
const questionImageDirectory = "assets/images/letters/";
const choiceImageDirectory = "assets/images/words/";
const questionContainer = document.getElementById('question');
const qImg = document.getElementById("qImage");
const soundButton = document.getElementById("sound");
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
const form = document.getElementById("certForm");
let currentQuestion = 0;
let score = 0;

//Questions & Choices for the Game

/**Questions Array of objects - Used to generate game questions, images, audio, choices and answers.
 * @global Object
 * @param {Array.<Object>} questions
 * @param {Array,<Object>}choices is an array within the questions array.*/

const questions = [
{
letterText:"'T'",
question:"Choose the picture that begins with the letter 'T'?",
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
question:"Choose the picture that begins with the letter 'A'?",
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
question:"Choose the picture that begins with the letter 'S'?",
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
question:"Choose the picture that begins with the letter 'M'?",
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
question:"Choose the picture that begins with the letter 'I'?",
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
        imageFile:"iguana.jpg",
        choiceText: "IGUANA",
    }
],
correct:choiceD
},
{
letterText:"'H'",
question:"Choose the picture that begins with the letter 'H'?",
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
question:"Choose the picture that begins with the letter 'C'?",
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
question:"Choose the picture that begins with the letter 'K'?",
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
question:"Choose the picture that begins with the letter 'O'?",
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
        imageFile:"ant.jpg",
        choiceText: "ANT",
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
question:"Choose the picture that begins with the letter 'P'?",
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
question:"Choose the picture that begins with the letter 'L'?",
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
question:"Choose the picture that begins with the letter 'E'?",
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
'question':"Choose the picture that begins with the letter 'G'?",
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

//Event Listener added to Homepage 'Let's Play' button that directs users to the start of the game

playButton.addEventListener('click', playGame);

/** @function playGame - initiates the game
 * Hides the homepage background, callout and overlay
 * Removes the hide class from the game section so it can be displayed.*/

function playGame() {
  playButton.classList.add('hide');
  document.getElementById("home").classList.add('hide');
  document.getElementById("overlay").classList.add('hide');
  document.getElementById("background").classList.remove('hide');
  score = 0;
  gameContainer.classList.remove('hide');
  renderQuestion();

 }

/**@function renderQuestion - renders the questions and answers to the game container. 
 * Uses a 'for' loop to iterate through the questions array and choices array*/

function renderQuestion(){
    for(let i=0; i<questions.length; i++){

    let q = questions[currentQuestion];

     //Sets up the html layout for the Questions in the game using the objects within the questions array  

    lText.innerHTML = `<h3> This is the letter ${q.letterText} </h3>`;
    questionContainer.innerHTML = `<h3> ${q.question} </h3>`;
    qImg.innerHTML = `<img src= ${questionImageDirectory}${q.qimage} alt = ${q.letterText} >`;

    //Sets up the html layout for the Choices in the game using the objects within the choices array

    imageA.src = `${choiceImageDirectory}${q.choices[0].imageFile}`;
    imageA.alt = q.choices[0].choiceText;
    TextA.innerText =  q.choices[0].choiceText;
    TextA.classList.add("hide"); //hides span text 
    imageB.src = `${choiceImageDirectory}${q.choices[1].imageFile}`;
    imageB.alt = q.choices[1].choiceText;
    TextB.innerText =  q.choices[1].choiceText;
    TextB.classList.add("hide"); //hides span text
    imageC.src =` ${choiceImageDirectory}${q.choices[2].imageFile}`;
    imageC.alt = q.choices[2].choiceText;
    TextC.innerText = q.choices[2].choiceText;
    TextC.classList.add("hide"); //hides span text
    imageD.src = `${choiceImageDirectory}${q.choices[3].imageFile}`;
    imageD.alt = q.choices[3].choiceText;
    TextD.innerText = q.choices[3].choiceText;
    TextD.classList.add("hide");//hides span text 
    
    // Places the Score Counter in the score container.
    scoreCount.innerHTML=`Score: ${score}`;
    
    }
    /** Adds an event listener to the 'Click for Letter Sound' button in the game container. 
     * Allows the audio for the game to be played when the button is clicked*/

    soundButton.addEventListener('click', setAudio);
}

/**@function nextQuestion -  renders the next question in the game. 
 * The if/else statement that reveals the submit button when the final question has been reached.
 * Otherwise it calls for the next question in the array to be rendered.*/
function nextQuestion(){

     if(currentQuestion == questions.length - 1){
         submitButton.classList.remove('hide'); //reveals the submit button at end of game container
     }
     else{

        renderQuestion(questions[currentQuestion++]);
     }
}

/**This functions locates and plays the audio files
 * @constructor audio with @parameter file to create a new Audio file
 * Calls the play() method on the new Audio file*/

function playAudio(file){
    let playFile = new Audio(file);
    playFile.play();
  }

/**This function sets the Audio for each question using the array audio objects
 * Creates a variable called audioFile using the target audio object from each question.
 * @function playAudio - plays the current question audio file 
 * @param audioFile - current question audio file*/

  function setAudio(){
    let audioFile = questions[currentQuestion].audio;
    playAudio(audioFile);
  }

/**Creates a variable to select the html div element answers container using querySelector.
 * Creates another variable for the nodelist of elements called allChoices
 * @parameter 'input' - selected elements 
 * @parameter 'img' - selected elements 
 * A 'for each' loop is initiated to iterate through the 'input' and 'img' elements within the answers container. 
 * Adds an event listener to each 'input and 'img' html element.
 * Calls the @function checkAnswer for each of these elements within the answers container.*/

const choiceContainer = document.querySelector("#answers");
const allChoices = choiceContainer.querySelectorAll("input","img");
allChoices.forEach((choice) => {
    choice.addEventListener("click", checkAnswer);
});

// Checks  if selected answer is correct or incorrect
function checkAnswer() {

    const correctAnswer = questions[currentQuestion].correct; //variable to identify the location of the correct answer within the questions array
    /** Uses an if/else statement that checks if the input element with the name "choices" matches the correctAnswer variable
     * @function correct is called if true.  
     * @function incorrect is called if false.*/

    if (document.querySelector('input[name = "choices"]:checked') == correctAnswer) {
        // answer is correct

        //If the answer is correct, increase score by 1
        score++;

        correct();

        //Removes the class 'hide' from the span elements to reveal the text when one of the image choices is selected.

        document.getElementById("A").classList.remove('hide');
        document.getElementById("B").classList.remove('hide');
        document.getElementById("C").classList.remove('hide');
        document.getElementById("D").classList.remove('hide');
        
        //Sets timeout delay of 4 seconds before next question is rendered.

        setTimeout(function () {
            nextQuestion();
        }, 4000);


    } else {
        // answer is incorrect
        incorrect();

        //Removes the class 'hide' from the span elements to reveal the text when one of the image choices is selected. 

        document.getElementById("A").classList.remove('hide');
        document.getElementById("B").classList.remove('hide');
        document.getElementById("C").classList.remove('hide');
        document.getElementById("D").classList.remove('hide');

        //Sets a time delay of 4 seconds before next question is rendered.

        setTimeout(function () {
            nextQuestion();
        }, 4000);

    }
}

/** @function correct  - is called when the answer is correct.
 * Displays an alert to the user, if the correct answer is chosen
 * The alert is timed to display for 2.2 seconds.*/

function correct() {

 Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Correct! Well Done!',
    text:'Keep up the good work!',
    showConfirmButton: false,
    timer: 2200
    });
 
}

/** @function incorrect  - is called when the answer is correct.
 * Displays an alert to the user, if the incorrect answer is chosen
 * The alert is timed to display for 2.2 seconds.*/

function incorrect() {
 Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Incorrect! Do not worry!',
    text: 'You are learning! Keep trying, you will get it next time.',
    showConfirmButton: false,
    timer: 2200
});
  
}

/**Adds an event listener to the 'Submit' button after the final question is answered
 * @function showResult - when the submit button is clicked 
 * Renders the results section*/

submitButton.addEventListener('click', showResult);

/** @function showResult - directs the user to the results section of the game.
 * User's'result is displayed in percentage format.
 * Adds the hide class to the game container and removes the hide class from the results container*/

function showResult( ){
    gameContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');

    /**Converts the user score to percentage format by multipling the user score by 100
     * Calls the toFixed method to set the percentage to fixed notation (rounding up the number to eliminate decimals)*/

    let totalScore = (score/questions.length * 100).toFixed();

    //Generates a html header element to display the users score in the results container.

    scoreContainer.innerHTML = `<h3> You  scored ${totalScore}% in Pic Phonics Initial Sounds Game</<h3>`;

    //Uses local storage to store the user score in percentage format
    
        localStorage.setItem("score",totalScore);
}

/** Created event listeners  on the 'Exit' navigation link and 'Exit Game' button 
 * @function exitGame - called when link or button is clicked*/

exitLink.addEventListener("click", exitGame);
exit.addEventListener("click", exitGame);

/** @function exitGame - allows the user to exit the game when all questions are completed
 * Displays an alert to the user aking if they are sure they want to leave the game.
 * If the request is confirmed, the user is directed back to the homepage.
 * If the request is cancelled, the alert will automatically close.*/

function exitGame() {
    Swal.fire({
        title: 'Are you sure you want to leave?',
        showCancelButton: true,
        confirmButtonText: `Leave`,
}).then((result) => {
  if (result.isConfirmed) {
        location.href= "index.html";
}});
}

//Bootstrap Form Validation - disables form submission if there are invalid fields

    cert.addEventListener('click', function(validate) {
        if (cert.checkValidity() === false) {
          validate.preventDefault();
          validate.stopPropagation();
        }
       else{
form.classList.add('was-validated'); 
       }
    });

/** Creates event listeners to restarts the game
 * @function restartGame - called when 'Play' link or 'Restart Game' button is clicked*/

playLink.addEventListener("click", restartGame);
restart.addEventListener("click", restartGame);

/** @function restarts - restarts the game by resetting the game container
 * Hides the results container.
 * Displays the game container
 * @function resetGame - resets score and displays first question*/

function restartGame(){
     gameContainer.classList.remove('hide');
    resultsContainer.classList.add('hide');

/** @function resetGame - resets the game container
 * Hides the submit button
 * Displays the first question.
 * Resets the score back to zero.
 * @function playGame- to initiate the game.*/ 

function resetGame() {
         submitButton.classList.add('hide');
        currentQuestion = 0;
        score = 0;
        playGame();
    }
    resetGame();
}
  
//Storing Result Form Inputs - Gets input values and stores these inputs in local storage
/**Event listener added to 'Get Certificate' button in results container
 * Calls the @function getName*/

cert.addEventListener('click', getName);

/** @function getName - creates two variables first name and last name
 * Stores the first name input field using setItem
 * Stores the last name input field using setItem
 * @function loadName - retrieves stored input values*/

function getName() {
        let firstName = document.getElementById("fname").value;
        let lastName = document.getElementById("lname").value;
        localStorage.setItem("fname", firstName);
        localStorage.setItem("lname", lastName);
      
        /** @function loadName - retrieves stored input values using getItem
         * Should populate users first and last name if they wish to take the test again*/

      function loadName() {
        let firstName = localStorage.getItem("fname");
        document.getElementById("fname").value = firstName;

       let lastName = localStorage.getItem("lname");
         document.getElementById("lname").value = lastName;
      }
      loadName();
    }
     
