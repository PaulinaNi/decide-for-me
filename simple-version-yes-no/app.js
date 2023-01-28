const getAnswerBtn = document.querySelector('.getAnswer')
const answerDiv = document.querySelector('.answer')
const appText = document.querySelector('.appText')

//random number generator from 1 to 7
const getRandomNumber = () => {
  return Math.ceil(Math.random() * 7)
}

//input answer on website

const showAnswer = (text, style) => {
  //add text
  answerDiv.textContent = text
  //remove previous classes
  const answerClasses = ['noAnswer', 'yesAnswer', 'maybeAnswer']
  for (let i = 0; i < 3; i++) {
    answerDiv.classList.remove(answerClasses[i])
  }
  //add answer style
  answerDiv.classList.add(style)
}

//get answer
const getAnswer = (number) => {
  switch (number) {
    case 1:
      showAnswer('No', 'noAnswer')
      break
    case 2:
      showAnswer('Hell No!', 'noAnswer')
      break
    case 3:
      showAnswer('No way!', 'noAnswer')
      break
    case 4:
      showAnswer('Yes', 'yesAnswer')
      break
    case 5:
      showAnswer('Absolutely!!!', 'yesAnswer')
      break
    case 6:
      showAnswer('By all means!', 'yesAnswer')
      break
    case 7:
      showAnswer('Maybe Tomorrow', 'maybeAnswer')
      break
    default:
      console.log(`error - ${number}`)
  }
}

//change text in the appText
const changeAppText = (text) => {
  appText.textContent = text
}

//event listener for button to get answer 
getAnswerBtn.addEventListener('click', () => {
  getAnswer(getRandomNumber())
  changeAppText('Ask next question')
})