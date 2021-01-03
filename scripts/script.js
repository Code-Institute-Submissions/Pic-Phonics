const playButton = document.getElementById('playGame')
const nextButton = document.getElementById('btn-next')
const gameContainer = document.getElementById('game')
const question = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers')

playButton.addEventListener('click', playGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function playGame() {
  playButton.classList.add('hide')
  document.getElementById("home").classList.add('hide')
  document.getElementById("overlay").classList.add('hide')
  currentQuestionIndex = 0
  gameContainer.classList.remove('hide')
  setNextQuestion()
}

const questions = {"questions":[
{
question:"Which picture has the sound 'T'?",
choiceA:"tree alt.jpg",
choiceB:"watermelon.jpg",
choiceC:"mouse alt.jpg",
choiceD:"pumpkin.jpg",
answer: "choiceA"

},
{
question:"Which picture has the sound A?",
choiceA:"tree alt.jpg",
choiceB:"watermelon.jpg",
choiceC:"mouse alt.jpg",
choiceD:"pumpkin.jpg",
answer: "choiceA"
},
{
question:"Which picture has the sound S?",
choiceA:"tree alt.jpg",
choiceB:"watermelon.jpg",
choiceC:"mouse alt.jpg",
choiceD:"pumpkin.jpg",
answer: "choiceA"

},
{
question:"Which picture has the sound M?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound I?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound H?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound C?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound K?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound O?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound P?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound L?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound E?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},
{
question:"Which picture has the sound G?",
choiceA:"",
choiceB:"",
choiceC:"",
choiceD:"",
answer: ""

},

]};
