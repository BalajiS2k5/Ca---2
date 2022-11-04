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
        question: "Professionals",
        a: "Virtuoso",
        b: "Dilettante",
        c: "Abecedarian",
        d: "Amateur",
        correct: "a",
    },
    {
        question: "Importance",
        a: "Domination",
        b: "Impotence",
        c: "Hardworking",
        d: "Significance",
        correct: "d",
    },
    {
        question: "Critic",
        a: "Wiry",
        b: "Sinewy",
        c: "Ropey",
        d: "Detractor",
        correct: "d",
    },
    {
        question: "Dreaded",
        a: "Tired",
        b: "Fear",
        c: "Sick",
        d: "Weak",
        correct: "b",
    },
    {
        question: "Contented",
        a: "dominance",
        b: "supremacy",
        c: "pleased",
        d: "rugged",
        correct: "c",
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
              var remarks="Your English is at a flabbergasted level"
            }
            else if (score===null){
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
           <h1>You answered ${score}/5 questions correctly</h1>
           <h2> <p>"${remarks}"</p></h2>
           <button onclick=><a href="../page 2/index2.html">Play Again</a></button>
          
           `
       }

      
    }
})


