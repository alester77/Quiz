const questionArr = [
  {
      question: "How can you add a comment in a JavaScript?",
      options: {
          a: "A. Just type something", 
          b: "B. CTL + ?", 
          c: "C. //", 
          d: "D. Both B and C are correct",
      },
      answer: "d"
  },
  {
      question: "How do you create a function in JavaScript?",
      options: {
          a: "A. function = myFunction()", 
          b: "B. function:myFunction()", 
          c: "C. function myFunction()", 
          d: "D. Pray",
      },
      answer: "c"
  },
  {
      question: "Where is the correct place to insert a JavaScript?",
      options: {
          a: "A. The head", 
          b: "B. The body", 
          c: "C. A and B are both correct", 
          d: "D. None of the above",
      },
      answer: "c"
  },
  {
      question: "Inside which HTML element do we put the JavaScript?",
      options: {
          a: "A. <script>", 
          b: "B. <scripting>", 
          c: "C. <insertJS>", 
          d: "D. <js>",
      },
      answer: "a"
  },
  {
      question: "How do call a function named myFunction?",
      options: {
          a: "A. With a phone", 
          b: "B. call function myFunction()", 
          c: "C. call myFunction()", 
          d: "D. myFunction()",            
      },
      answer: "d"
  }
];

// Global attributes
var header = document.querySelector(".header");
var opening = document.querySelector(".opening");
var container = document.querySelector(".container");
var divider = document.querySelector(".divider");
var result = document.querySelector(".result");
var scores = [];
var mark = 0;
var index = 0;
var record = [];


//create visuals of the quiz
function begin() {
    var remove = container;
    while(remove.hasChildNodes()){
        remove.removeChild(remove.firstChild);
    console.log(remove);
    };

    //create timer section (seconds)
    var time = document.createElement("p");
    time.textContent="Time Left"
    var second = document.createElement("p");
    time.appendChild(second);

    //create high score section
    var highScore = document.createElement("button");
    viewScore.classList.add("banner", "see-score");
    highScore.textContent= "See High Scores";

    //create title
    var title = document.createElement("h1");
    title.textContent = "Javascript quiz"

    //create starter paragraph
    var instructions = document.createElement("h2");
    instructions.textContent = "Do your best! This quiz is timed and wrong answer will deduct from the time you have.";

    //create start button
    var startBtn = document.createElement("button");
    startBtn.classList.add("btn", "btn-start");
    startBtn.textContent= "Begin Quiz";

    header.appendChild(time);
    header.appendChild(highScore);
    container.appendChild(title);
    container.appendChild(instructions);
    container.appendChild(startBtn);

    // Click to start
    document.querySelector("btn-start").addEventListener("click"); //still need to add once timer function is done
    // Click for scores
    document.querySelector("see-score").addEventListener("click"); //still need high score function


}