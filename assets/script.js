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
    };

    //create timer section (seconds)
    var time = document.createElement("p");
    time.textContent="Time Left"
    var second = document.createElement("p");
    second.setAttribute('id', "second");
    time.appendChild(second);

    //create high score section
    var highScore = document.createElement("button");
    highScore.classList.add("banner", "see-score");
    highScore.textContent= "See High Scores";

    //create title
    var title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Javascript quiz"

    //create starter paragraph
    var instructions = document.createElement("h2");
    instructions.classList.add("text");
    instructions.textContent = "Do your best! This quiz is timed and wrong answer will deduct from the time you have.";

    //create start button
    var startBtn = document.createElement("button");
    startBtn.classList.add("btn", "startBtn");
    startBtn.textContent= "Begin Quiz";

    header.appendChild(time);
    header.appendChild(highScore);
    container.appendChild(title);
    container.appendChild(instructions);
    container.appendChild(startBtn);

    // Click to start
    document.querySelector(".startBtn").addEventListener("click", timer); //still need to add once timer function is done
    // Click for scores
    document.querySelector(".see-score").addEventListener("click", viewHighScore); //still need high score function
}

function makeQuiz() {
    var remove = container;
    while(remove.hasChildNodes()){
        remove.removeChild(remove.firstChild);
    };

    if (index < questionArr.length) {
        //where the whole quiz goes
        var quizHere = document.createElement("div");
        quizHere.classList.add("quiz");
        container.appendChild(quizHere);
        //where the question is
        var questionAsked = document.createElement("h1");
        questionAsked.classList.add("title");
        questionAsked.textContent = questionArr[index].question;
        container.appendChild(questionAsked);
        //where the options are
        var answerOptions = questionArr[index].options;
        for (var x in answerOptions) {
            var quizOption = document.createElement("button");
          quizOption.classList.add("btn", "btn-answer");
          if (x === questionArr[index].answer) {
              quizOption.setAttribute("check", "correct");
          }
          quizOption.textContent = answerOptions[x];
          quizHere.appendChild(quizOption); 
        }
    index++;
    divider.style.visibility = "visible"

    document.querySelector(".quiz").addEventListener("click", checkResult);

    } else {
        //what pops up when the quiz is over
        var finished = document.createElement("h3");
        document.textContent = "You're done!";
        container.appendChild(finished);
        var finishedScore = document.createElement("p");
        document.textContent = "Good job! Your score is " +mark;
        container.appendChild(finishedScore);

        //need to make where the enter their initials
        var enteredInfo = document.createElement("entered");
        enteredInfo.classList.add("entered");
        container.appendChild(enteredInfo);

        var card = document.createElement("card");
        card.classList.add("card");
        card.setAttribute("for", "name");
        card.textContent = "Enter initials here";
        enteredInfo.appendChild(card);

        var input = document.createElement("input");
        input.classList.add("text");
        input.setAttribute("type", "text");
        input.setAttribute("name", "name");
        input.setAttribute("id", "name");
        input.setAttribute("placeholder", "name");
        enteredInfo.appendChild(input); 

        var submit = document.createElement("button");
        submit.classList.add("btn", "btn-submit");
        submit.textContent = "Submit";
        enteredInfo.appendChild(submit);
  
        // click submit button
        document.querySelector(".btn-submit").addEventListener("click", recordHighScore);
    }
}

function timer() {
    var timeStart = 60;
    var timeInterval = setInterval(function() {
        
        var timeEl = document.querySelector("#second");
      timeEl.textContent = timeStart + "s";
      timeStart--;


      //this take away time if they get it wrong
      if(result.textContent.match("Oops")) {
        timeStart -= 10;
    }

      if (timeStart < 0 || scores.length === questionArr.length) {

          clearInterval(timeInterval);

          alert("Way to go! The quiz is over.");
          timeEl.textContent = 0 + "s";

          index += questionArr.length;

          makeQuiz();
      }
  }, 1000);

  makeQuiz();
}

function checkResult(event) {

    var points = event.target;
  
    var check = document.createElement("p");
    check.classList.add("check-result");
    if (points.hasAttribute("check")) {
        check.textContent = "That's right!";
        mark += 5;
    } else {
        check.textContent = "Oops!";
        mark -= 5;
    }
    result.appendChild(check);
    scores.push(mark);
  
    setTimeout(() => {
        check.remove();
        makeQuiz();
    }, 1000);   
  }

  function recordHighScore(event) {

    event.preventDefault();
  
    // clear scores array & index
    scores.length = 0;
    index = 0;
  
    var playerName = document.querySelector("#name").value;
  
    if (!playerName) {
        alert("please enter a name.");
    } else {
        var recordObj = {
            name: playerName,
            highScore: mark,
        }
    }
  
    record.push(recordObj);
    saveData();
    // reset mark
    mark = 0;
    viewHighScore();
  }
  
  function viewHighScore() {
    // clear page content
    header.style.border = "none";
    var removeHeader = header;
    while (removeHeader.hasChildNodes()) {
        removeHeader.removeChild(removeHeader.firstChild);
    }
    var removeContainer = container;
    while (removeContainer.hasChildNodes()) {
        removeContainer.removeChild(removeContainer.firstChild);
    }
  
    // create high scores board
    var highScoresTitle = document.createElement("h1");
    highScoresTitle.classList.add("title");
    highScoresTitle.textContent = "High Scores";
    container.appendChild(highScoresTitle);
  
    loadData();
  
    // create the two buttons at the end of the quiz when you're looking at the high scores
    var goBack = document.createElement("button");
    goBack.classList.add("btn", "btn-goBack");
    goBack.textContent = "Go Back";
    container.appendChild(goBack);
  
    var clear = document.createElement("button");
    clear.classList.add("btn", "btn-clear");
    clear.textContent = "Clear High Scores";
    container.appendChild(clear);
  
    document.querySelector(".btn-goBack").addEventListener("click", begin);
    document.querySelector(".btn-clear").addEventListener("click", clearHistory);
  }
  
  function loadData() {
  
    var load = localStorage.getItem("high scores");
  
    if (!load) {
        return false;
    }
  
    load = JSON.parse(load);
  
    for (var i = 0; i < load.length; i++) {
        var highScorestext = document.createElement("li");
        highScorestext.classList.add("list", "text");
        highScorestext.setAttribute("id", "quiz-mark");
        highScorestext.textContent = load[i].name + " : " + load[i].highScore;
        container.appendChild(highScorestext);
    }
  }

  function saveData() {
    localStorage.setItem("high scores", JSON.stringify(record));
  }
  

  
  function clearHistory() {
    // clear local storage
    window.localStorage.clear();
    // clear history list under container
    document.querySelectorAll("#quiz-mark").forEach(removeHistory => removeHistory.remove());
  }
  
  begin();



