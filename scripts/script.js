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
choiceC:"tractor.jpg",
choiceD:"mouse alt.jpg",
choiceE:"pumpkin.jpg",
answer: "choiceB, choiceC"

},
{
question:"Which picture has the sound A?",

},
{
question:"Which picture has the sound S?",

}
]};
