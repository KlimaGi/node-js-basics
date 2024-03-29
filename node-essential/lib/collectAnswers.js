const readline = require("readline");
const { EventEmitter } = require("events");
const { emit } = require("process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questions, done = (f) => f) => {
  const answers = [];
  const [firstQ] = questions;
  const emitter = new EventEmitter();

  const questionAnswered = (answer) => {
    emitter.emit("answer", answer);
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      emitter.emit("complete", answers);
      done(answers);
    }
  };

  rl.question(firstQ, questionAnswered);

  return emitter;
};

// collectAnswers(questions, (answers) => {
//   console.log("Thank you for your answers. ");
//   console.log(answers);
//   process.exit();
// });
