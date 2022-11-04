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
        question: "made poor(of a person or area) ",
        a: "Comp",
        b: "Impoverished",
        c: "Cryptocurrency",
        d: "Deepfake",
        correct: "b",
    },
    {
        question: "Angry or irritated. ",
        a: "Ebullient",
        b: "Broigus",
        c: "Efface",
        d: "Deepfake",
        correct: "b",
    },
    {
        question: "Apathetic or bored after experiencing an excess of something.        ",
        a: "Jovial",
        b: "Jaunt",
        c: "Jaded",
        d: "Gaffe",
        correct: "c",
    },  {
        question: "Used often to imply pretentiousness & ostentation.",
        a: "Fantoosh",
        b: "Galvanize",
        c: "Gaffe",
        d: "Multifarious",
        correct: "a",
    },
    {
        question: "To swallow greedily or hurriedly in a single draught.        ",
        a: "Rat",
        b: "Tamer",
        c: "Quisling",
        d: "Quaff",
        correct: "d",
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
            else if (score=0) {
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
           <h1>         ${remarks}</h1>
           <button onclick=><a href="../page 2/index2.html">Reload</a></button>
          
           `
       }

      
    }
})


