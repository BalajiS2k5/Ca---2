const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const quizData = [
    {
        question: "Throbbed",
        a: "Beat",
        b: "Pound",
        c: "Helpful",
        d: "Ragamuffin",
        correct: "c",
    },
    {
        question: "Mound",
        a: "Depression",
        b: "Pile",
        c: "Collection",
        d: "Antique",
        correct: "a",
    },
    {
        question: "Lament",
        a: "Mourn",
        b: "Latent",
        c: "Greet",
        d: "Celebrate",
        correct: "d",
    },
    {
        question: "Toil",
        a: "Labour",
        b: "Entertainment",
        c: "Paper",
        d: "Fold",
        correct: "b",
    },
];

let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           console.log(score)

           if(score==1||score==2){
            var remarks="Better Luck Next Time"
            }
            else if(score==3||score==4){
                var remarks="Well Done"
            }
            else if (score==5){
              var remarks="Your English is at a Flabbergasted level"
            }
            else {
                var remarks="You're Dumb"
           }
        
                console.log(remarks)
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
            <img  src="../assets/gameover.jpg" width="100%">
           <audio src="../assets/gameover.wav" autoplay ></audio>
           <h2>You answered ${score}/5 questions correctly</h2>
           <h1> ${remarks}</h1>
           <button onclick=><a href="../page 2/index2.html">Reload</a></button>
          
           `
       }

      
    }
})


