const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
  ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
//  candidateName = input.question("What is your name?");
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name?");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
    if (candidateAnswers[i] === correctAnswers[i]) {
      console.log(`Your answer to question ${i + 1} is correct!`);
    } else {
      console.log(`Your answer to question ${i + 1} is incorrect.`);
    }
  }
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
for (let i = 0; i < questions.length; i++) {
  currentQuestion = questions[i].question;
  candidateResponse = candidateAnswers[i];
  correctAnswer = correctAnswers[i];

  console.log(`Question: ${currentQuestion} \n Candidate's Response: ${candidateResponse} \n Correct Answer: ${correctAnswer}`);
}
//TODO 3.2 use this variable to calculate the candidates score.
  
  let candidateScore = 0; 
  let grade;
  let passingGrade = 80;
  let totalQuestions = 5

  for (let i = 0; i < totalQuestions; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      candidateScore += 1;
  }
  }
 
  grade = (candidateScore / questions.length) * 100;
  
  console.log(`Your Score: ${grade}%
   ${candidateScore} out of ${totalQuestions} responses correct!`);

  if (grade >= passingGrade) {
    console.log("Congratulations, You've Passed the Quiz!");
  } else {
    console.log("Quiz Failed");
  }

  return grade;
}
 

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " +candidateName + ", good luck on this quiz!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}
