const getAnswerBtn = document.querySelector('.getAnswer')
const answerDiv = document.querySelector('.answer')

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
      showAnswer('no', 'noAnswer')
      console.log('answer 1: no')
      break
    case 2:
      showAnswer('hell no', 'noAnswer')
      console.log('answer 2: hell no')
      break
    case 3:
      showAnswer('No way!', 'noAnswer')
      console.log('answer 3: No way!')
      break
    case 4:
      showAnswer('yes', 'yesAnswer')
      console.log('answer 4: yes')
      break
    case 5:
      showAnswer('Absolutely!', 'yesAnswer')
      console.log('answer 5: Absolutely!')
      break
    case 6:
      showAnswer('by all means!', 'yesAnswer')
      console.log('answer 6: by all means!')
      break
    case 7:
      showAnswer('maybe tomorrow', 'maybeAnswer')
      console.log('answer 7: maybe tomorrow')
      break
    default:
      console.log(`error - ${number}`)
  }
}

//event listener for button to get answer 
getAnswerBtn.addEventListener('click', () => {
  getAnswer(getRandomNumber())
})