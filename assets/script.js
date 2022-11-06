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

