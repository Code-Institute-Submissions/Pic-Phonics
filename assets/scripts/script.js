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
/**Questions Array of objects - Code used to generate game questions, images, audio, choices and answers.
 * @global Object
 * @param {Array.<Object>} questions
 * @param {Array,<Object>}choices is an array within the questions array of objects.
*/
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
 * Removes the hide class from the game section so it can be displayed to the user
*/
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
    
    // Places the Score Counter in the score container in the html file
    scoreCount.innerHTML=`Score: ${score}`;
    
    }
    /** Adds an event listener to the 'Click for Letter Sound' button in the game container. 
     * Allows the audio for the game to be played when the button is clicked*/
    soundButton.addEventListener('click', setAudio);
}

/**@function nextQuestion -  renders the next question in the game. 
 * Contains an if statement that tells the function to reveal the submit button when the final question has been reached.
 * If the question is not the final question then the else statement tells the function to display the next question in the questions array.*/
function nextQuestion(){
    /** @param currentQuestion 
     * Checks if currentQuestion is equal to the final question in the array */
     if(currentQuestion == questions.length - 1){
         submitButton.classList.remove('hide'); //reveals the submit button at end of game container
     }
     else{
    /** @param currentquestion ++ 
     * Tells the function to move on to next question in the array*/
        renderQuestion(questions[currentQuestion++]);
     }
}

/**This functions is designed to locate and play audio files
 * @constructor audio with @parameter file to create a new Audio file
 * Calls the play() method on the new Audio file*/
function playAudio(file){
    let playFile = new Audio(file);
    playFile.play();
  }

/**This function sets the Audio for each question using the array audio objects
 * Creates a new variable called audioFile using the target audio object for each question.
 *  @callback playAudio - to play the current question audio file */  
  function setAudio(){
    let audioFile = questions[currentQuestion].audio;
    playAudio(audioFile);
  }

/**Creates a variable for the html div element answers container using querySelector.
 * Creates another variable for the nodelist of elements called allChoices
 * @parameter 'input' - selected elements 
 * @parameter 'img' - selected elements 
 * A 'for each' loop is initiated to iterate through the 'input' and 'img' elements within the answers container. 
 * Adds an event listener to each 'input and 'img' html element.
 * Calls the @function checkAnswer for each of these elements within the answers container.
*/
const choiceContainer = document.querySelector("#answers");
const allChoices = choiceContainer.querySelectorAll("input","img");
allChoices.forEach((choice) => {
    choice.addEventListener("click", checkAnswer);
});

// Checks  if answer users selects is correct or incorrect
function checkAnswer() {

    const correctAnswer = questions[currentQuestion].correct; //variable to identify the location of the correct answer within the questions array
    /*Uses an if statement that checks if the input element with the name "choices" matches the correctAnswer variable
    If this statement is true then the answer selected is correct*/
    if (document.querySelector('input[name = "choices"]:checked') == correctAnswer) {
        // answer is correct

        //If the answer is correct, increase score by 1
        score++;

        /**Calls the @function correct*/
        correct();

        //Removes the class 'hide' from the span elements in the answers container to reveal the text when one of the image choices is selected.
        document.getElementById("A").classList.remove('hide');
        document.getElementById("B").classList.remove('hide');
        document.getElementById("C").classList.remove('hide');
        document.getElementById("D").classList.remove('hide');
        
        //Sets timeout delay  of 4 seconds before next question is rendered to the DOM
        setTimeout(function () {
            nextQuestion();
        }, 4000);

    /**Calls the @function incorrect if the answer selected does not equal the correctAnswer variable*/
    } else {
        // answer is incorrect
        incorrect();

        //Removes the class 'hide' from the span elements in the answers container to reveal the text when one of the image choices is selected.    
        document.getElementById("A").classList.remove('hide');
        document.getElementById("B").classList.remove('hide');
        document.getElementById("C").classList.remove('hide');
        document.getElementById("D").classList.remove('hide');

        //Sets a time delay of 4 seconds before next question is rendered to the DOM
        setTimeout(function () {
            nextQuestion();
        }, 4000);

    }
}

/** @function correct  - is called when the answer is correct.
 * Displays an alert to the user, informing them that they have chosen the correct answer
 * The alert has a timer that displays the alert for 2.2 seconds.
*/
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
 * Displays an alert to the user, informing them that they have chosen the incorrect answer
 * The alert has a timer that displays the alert for 2.2 seconds.
*/
function incorrect() {
 Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Incorrect...but do not worry!You are learning!',
    text: 'Keep trying, you will get it next time.',
    showConfirmButton: false,
    timer: 2200
});
  
}

/**Adds an event listener to the 'Submit' button after the final question is answered
 * Calls the @function showResult - when the submit button is clicked 
 * Displays the results section container to the DOM
*/
submitButton.addEventListener('click', showResult);

/** This @function showResult directs the user to the results section of the game.
 * User's'result is displayed in percentage format on completion of the game
 * Adds the hide class to the game container and removes the hide class from the results container to make it visible*/
function showResult( ){
    gameContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');

    /**Creates a variable totalScore to convert the user score to percentage format by multipling the user score by 100
     * Calls the toFixed method to set the percentage to fixed notation (rounding up the number to eliminate decimals)
    */
    let totalScore = (score/questions.length * 100).toFixed();

    //Uses the html element scoreContainer to generate a html header element to display the users score in the results container.
    scoreContainer.innerHTML = `<h3> You  scored ${totalScore}% in Pic Phonics Initial Sounds Game</<h3>`;

    //Uses local storage to store the user score in percentage format
        localStorage.setItem("score",totalScore);
}

/** Created event listeners to call the @function exitGame
 * Calls this function when the 'Exit' nav link item is clicked
 * Calls this function when the 'Exit Game' button in the results section is clicked
 */
exitLink.addEventListener("click", exitGame);
exit.addEventListener("click", exitGame);

/** This @function exitGame allows the user to exit the game when all questions are completed
 * Displays an alert to the user aking if they are sure they want to leave the game.
 * This is to ensure their progress isn't deleted if the function is called on by accident
 * If the user confirms the request, they will be directed back to the homepage.
 * If the user selects rejects the request, the alert will automatically close
*/
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
 * Calls this function when the 'Play' nav link item is clicked
 * Calls this function when the 'Let's Play' button is clicked */
playLink.addEventListener("click", restartGame);
restart.addEventListener("click", restartGame);

/** This @function restarts the game by resetting the game container
 * Hides the results container.
 * Removes the hide class on the game container
 * Calls the @function resetGame
*/
function restartGame(){
     gameContainer.classList.remove('hide');
    resultsContainer.classList.add('hide');

/** @function resetGame - resets the game container
 * Adds the hide class to the submit button that appears after the final question is answered in the game
 * Resets the question back to zero so the first question in the questions array will be displayed.
 * Resets the score back to zero.
 * @callback playGame - to initiate the game.*/ 
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
 * Calls the @function getName
*/
cert.addEventListener('click', getName);

/** @function getName - creates two variables first name and last name
 * Stores the first name input field using setItem
 * Stores the last name input field using setItem
 * Calls @function loadName to retrieve stored input values
 */
function getName() {
        let firstName = document.getElementById("fname").value;
        let lastName = document.getElementById("lname").value;
        localStorage.setItem("fname", firstName);
        localStorage.setItem("lname", lastName);
      
        /** @function loadName - retrieves stored input values using getItem
         * Creates two variables first name and last name to retriev this data
         * Should populate users first and last name if they wish to take the test again
        */
      function loadName() {
        let firstName = localStorage.getItem("fname");
        document.getElementById("fname").value = firstName;

       let lastName = localStorage.getItem("lname");
         document.getElementById("lname").value = lastName;
      }
      loadName();
    }
     
