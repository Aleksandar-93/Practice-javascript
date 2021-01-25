const quizData = [
{
    question: 'how much years have Donald Trump?',
    a: '101',
    b: '75',
    c: '67',
    d: '84',
    correct:'b'
},
{
    question: 'What is the the most used programming lenguage in 2020?',
    a: 'Java',
    b: 'C',
    c: 'Paython',
    d: 'JavaScript',
    correct:'d'
},

{
    question: 'Who is the President of US?',
    a: 'Obi Wan Kenobi',
    b: 'Donald Trump',
    c: 'Joe Biden',
    d: 'Barack Obama',
    correct:'c'
},

{
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Langueage',
    b: 'Cascadion Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborguines',
    correct:'a'
},

{
    question: 'What Year was JavaScript Launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of the above',
    correct:'d'
}
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
        
    });

    return answer;   
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
    