interface Question {
    question: string;
    choices: string[];
    correctAnswerIndex: number;
  }
  
  const quizQuestions: Question[] = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswerIndex: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswerIndex: 1
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
      correctAnswerIndex: 0
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswerIndex: 3
    },
    {
      question: "What is the chemical symbol for gold?",
      choices: ["Au", "Ag", "Pb", "Fe"],
      correctAnswerIndex: 0
    }
  ];
  



  const quest = document.getElementById("quest") as HTMLHeadingElement
  const radioInputContainer = document.getElementById("radioInputContainer") as HTMLDivElement
  const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement


  let currentInd : number = 0;


  renderQuizToHTML();

  function renderQuizToHTML(){
    radioInputContainer.innerHTML ='';
    const que = quizQuestions[currentInd];
    quest.innerHTML = `${currentInd + 1}. ${que.question}`

    const allOptions = que.choices.forEach(
      (data, index) =>
    (radioInputContainer.innerHTML +=`<label>
    <input type="radio" name="${`question-${currentInd}`}" value={${data}} />
    <span>${data}</span>
</label>`)
    )
    }

    nextBtn.addEventListener('click', ()=>{
      currentInd++;
      renderQuizToHTML();
    })