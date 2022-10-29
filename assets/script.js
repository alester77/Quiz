const Questions = [{
  id: 0,
  q: "Do sharks have bones?"
  a: [{text: "True", isCorrect: false},
      {text: "False", isCorrect: true}
     ]
},
{
  id: 1
  q: "What is it called when a shark jumps out of the water?"
  a: [ {text: "Flying", isCorrect: false},
        {text: "Leaping", isCorrect: false},
        {text: "Breach", isCorrect: true},
        {text: "Scary", isCorrect: false}
      ]
},
{
  id: 2
  q: "What is the most dangerous animal in the world?"
  a: [ {text: "Hippo", isCorrect: false},
        {text: "Mosquito", isCorrect: true},
        {text: "Sharks", isCorrect: false},
        {text: "Dogs", isCorrect: false}
      ]

  }]

  // Begin
  var start = true;

  function iterate(id) {
    var results = document.getElementsByClassName("results");
    results[0].innerText = ";"

    // Get the question
    const question = document.getElementById("question");

    question.innerText = Questions[id].q;

    // Get options
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const third = document.getElementById("third");

    // Get text for options
    first.innerText = Questions[id].a[0].text;
    second.innerText = Questions[id].a[1].text;
    third.innerText = Questions[id].a[2].text;

    var selected = "";

    first.addEventListener("click", () +> )
  }

  if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})

  