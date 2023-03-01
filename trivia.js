const questions = document.querySelector('.questions');
const optionA = document.querySelector('.optionA');
const optionB = document.querySelector('.optionB');
console.log(questions)
console.log(optionA)
console.log(optionB)

class Trivia {
    constructor (name, question, trueAnswer, falseAnswer, points) {
        this.name = name;
        this.question = question;
        this.trueAnswer = trueAnswer;
        this.falseAnswer = falseAnswer
    }
}

// const trivia1 = new Trivia ("question1", "Pam and Jim's first kiss took place where?", "Chili's", "Applebee's")
// const trivia2 = new Trivia ("question2", "Where does Michael Scott move to start his new life with Holly?", "Boulder, Colorado", "Phoenix, Arizona")
// const trivia3 = new Trivia ("question3", "What are the names of Jim and Pam Halpert's kids?", "Cece and Phillip", "Penelope and Will")
// const trivia4 = new Trivia ("question4", "Who was on the jury for the Scranton Strangler case?", "Toby", "Kelly")
// const trivia5 = new Trivia ("question5", "Which of Angela's cats did Dwight kill?", "Sprinkles", "Cinnamon")
// const trivia6 = new Trivia ("question6", "Who was Pam engaged to before Jim?", "Roy", "Rob")
// const trivia7 = new Trivia ("question7", "Michael and Dwight tried to steal clients from which local competing business?", "Prince Family Paper", "Royal Group Paper Supplies")
// const trivia8 = new Trivia ("question8", "How many brothers does Jim Halpert have?","Two", "One")
// const trivia9 = new Trivia ("question9", "How much does Bob Vance bid on a hug from his wife Phyllis?","$1000", "$585")
// const trivia10 = new Trivia ("question10", "Who did Michael end up taking to Jamaica?","Jan", "Holly")
let allQstns = [
    new Trivia ("question1", "Pam and Jim's first kiss took place where?", "Chili's", "Applebee's"),
    new Trivia ("question2", "Where does Michael Scott move to start his new life with Holly?", "Boulder, Colorado", "Phoenix, Arizona"),
    new Trivia ("question3", "What are the names of Jim and Pam Halpert's kids?", "Cece and Phillip", "Penelope and Will"),
    new Trivia ("question4", "Who was on the jury for the Scranton Strangler case?", "Toby", "Kelly"),
    new Trivia ("question5", "Which of Angela's cats did Dwight kill?", "Sprinkles", "Cinnamon"),
    new Trivia ("question6", "Who was Pam engaged to before Jim?", "Roy", "Rob"),
    new Trivia ("question7", "Michael and Dwight tried to steal clients from which local competing business?", "Prince Family Paper", "Royal Group Paper Supplies"),
    new Trivia ("question8", "How many brothers does Jim Halpert have?","Two", "One"),
    new Trivia ("question9", "How much did Bob Vance bid on a hug from his wife Phyllis?","$1000", "$585"),
    new Trivia ("question10", "Who did Michael end up taking to Jamaica?","Jan", "Holly")
]

allQstns.sort((a, b) => {
    return Math.random() - 0.5;
})
// console.log(allQstns)


// iterate through random array,

questions.innerHTML = Trivia1.question
if (Math.random() < 0.5){
    optionA.innerHTML = Trivia1.trueAnswer
    optionB.innerHTML = Trivia1.falseAnswer
} else {
    optionA.innerHTML = Trivia1.falseAnswer
    optionB.innerHTML = Trivia1.trueAnswer
}

// let choice = object.addEventListener("click")

function nextQuestionA() {
    if (optionA.innerHTML === Trivia1.trueAnswer){
        questions.innerHTML = Trivia2.question
        if (Math.random() < 0.5){
            optionA.innerHTML = Trivia2.trueAnswer
            optionB.innerHTML = Trivia2.falseAnswer
        } else {
            optionA.innerHTML = Trivia2.falseAnswer
            optionB.innerHTML = Trivia2.trueAnswer
        }
        
    } else console.log("game over")
}

function nextQuestionB() {
    if (optionB.innerHTML === Trivia1.trueAnswer){
        questions.innerHTML = Trivia2.question
        if (Math.random() < 0.5){
            optionA.innerHTML = Trivia2.trueAnswer
            optionB.innerHTML = Trivia2.falseAnswer
        } else {
            optionA.innerHTML = Trivia2.falseAnswer
            optionB.innerHTML = Trivia2.trueAnswer
        }
        
    } else console.log("game over")
}


optionA.addEventListener("click", nextQuestionA);
optionB.addEventListener("click", nextQuestionB);


let prova = Trivia1

console.log(Trivia1 ++)


