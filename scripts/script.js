const playButton = document.getElementById('playGame')
const nextButton = document.getElementById('btn-next')
const gameContainer = document.getElementById('game')
const question = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers')

const questions = [
{
question:"Which picture has the sound 'T'?",
qimage:"Tt new.jpg",
choiceA:"tree alt.jpg",
choiceB:"watermelon.jpg",
choiceC:"mouse alt.jpg",
choiceD:"pumpkin.jpg",
answer: "choiceA"

},
{
question:"Which picture has the sound A?",
qimage:"Aa new.jpg",
choiceA:"tree alt.jpg",
choiceB:"watermelon.jpg",
choiceC:"mouse alt.jpg",
choiceD:"pumpkin.jpg",
answer: "choiceA"
},
{
question:"Which picture has the sound S?",
qimage:"Ss new.jpg",
choiceA:"tree alt.jpg",
choiceB:"watermelon.jpg",
choiceC:"mouse alt.jpg",
choiceD:"pumpkin.jpg",
answer: "choiceA"

},
{
question:"Which picture has the sound M?",
qimage:"Mm new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound I?",
qimage:"Ii new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound H?",
qimage:"Hh new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound C?",
qimage:"Cc new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound K?",
qimage:"Kk new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound O?",
qimage:"Oo new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound P?",
qimage:"Pp new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound L?",
qimage:"Ll new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound E?",
qimage:"Ee new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound G?",
qimage:"Gg new.jpg",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
]


playButton.addEventListener('click', playGame)


function playGame() {
  playButton.classList.add('hide')
  document.getElementById("home").classList.add('hide')
  document.getElementById("overlay").classList.add('hide')
  currentQuestionIndex = 0
  gameContainer.classList.remove('hide')

  document.getElementById('question').innerHTML = questions.question;
  document.getElementById('answers').innerHTML = questions.choiceA + " " + questions.choiceB + " " + questions.choiceC + " " + questions.choiceD + " ";
}




