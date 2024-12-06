document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  const questions = [
    {
      question: "What is the purpose of React's reconciliation process?",
      options: [
        "To ensure server-side rendering",
        "To compare virtual DOM and real DOM",
        "To handle error boundaries",
        "To improve state management",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a key in React, and why is it important?",
      options: [
        "An attribute for identifying elements in lists",
        "A prop to trigger lifecycle methods",
        "A tool for conditional rendering",
        "A feature for handling state updates",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which hook is used for managing side effects in React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: 1,
    },
    {
      question: "What does React.memo do?",
      options: [
        "Prevents unnecessary re-renders of functional components",
        "Creates a reference for DOM elements",
        "Enables state persistence",
        "Executes a function only once",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of React's Context API?",
      options: [
        "To handle asynchronous data fetching",
        "To manage global state",
        "To implement dynamic routing",
        "To create reusable components",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which lifecycle method is called after the component is updated?",
      options: [
        "componentDidMount",
        "componentDidUpdate",
        "shouldComponentUpdate",
        "getDerivedStateFromProps",
      ],
      correctAnswer: 1,
    },
    {
      question: "How does React handle asynchronous rendering?",
      options: [
        "Through Fiber architecture",
        "By using callback props",
        "With the help of Context API",
        "Via componentDidCatch",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the difference between props and state in React?",
      options: [
        "Props are immutable; state is mutable",
        "Props are local; state is global",
        "Props are asynchronous; state is synchronous",
        "Props are temporary; state is persistent",
      ],
      correctAnswer: 0,
    },
    {
      question: "What does useReducer hook provide?",
      options: [
        "An alternative to state management with reducers",
        "A way to access global context",
        "A tool for creating custom hooks",
        "A method for lifecycle handling",
      ],
      correctAnswer: 0,
    },
    {
      question: "What happens if you update the state directly in React?",
      options: [
        "It triggers a re-render of the component",
        "It causes errors in lifecycle methods",
        "It does not update the component UI",
        "It removes props from child components",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of React's Suspense component?",
      options: [
        "To catch errors in rendering",
        "To delay rendering until conditions are met",
        "To manage routing transitions",
        "To optimize component performance",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does the React.StrictMode component do?",
      options: [
        "Warns about unsafe lifecycle methods",
        "Provides error boundaries",
        "Handles conditional rendering",
        "Improves server-side rendering",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the significance of defaultProps in React?",
      options: [
        "To handle missing props with default values",
        "To enforce prop types",
        "To manage state across components",
        "To implement conditional rendering",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which hook would you use to avoid frequent API calls on component renders?",
      options: ["useEffect", "useMemo", "useCallback", "useReducer"],
      correctAnswer: 1,
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A real copy of the browser's DOM",
        "An abstraction for efficient DOM updates",
        "A cache for components",
        "A tool for debugging UI elements",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which statement about React keys is true?",
      options: [
        "Keys must be globally unique",
        "Keys are necessary for performance optimization",
        "Keys are passed to child components as props",
        "Keys should be integers only",
      ],
      correctAnswer: 1,
    },
    {
      question: "How does React's useRef hook work?",
      options: [
        "It persists mutable values across renders",
        "It provides access to state values",
        "It triggers re-renders when updated",
        "It stores component props",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of React Portals?",
      options: [
        "To optimize state updates",
        "To enable rendering outside the parent DOM hierarchy",
        "To manage complex event handlers",
        "To enforce strict rendering rules",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a PureComponent in React?",
      options: [
        "A component that prevents unnecessary re-renders",
        "A functional component with hooks",
        "A component with no state",
        "A component that only renders children",
      ],
      correctAnswer: 0,
    },
    {
      question: "How does React optimize performance for large lists?",
      options: [
        "Using the Context API",
        "By using React.memo",
        "With libraries like React Virtualized",
        "Through server-side rendering",
      ],
      correctAnswer: 2,
    },
  ];
  

  // Shuffle questions and answers
 // Shuffle questions and answers
shuffleArray(questions); // Shuffle the questions array
questions.forEach((question) => {
  const { shuffledOptions, newCorrectAnswerIndex } = shuffleWithAnswers(
    question.options,
    question.correctAnswer
  );
  question.options = shuffledOptions;
  question.correctAnswer = newCorrectAnswerIndex; // Update the correct answer
});


  let currentQuestionIndex = 0;
  let score = 0;

  function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
    app.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header">
          <h2>Don’t UseRef Me Wrong👌</h2>
          <p>Quiz Time</p>
          <div class="progress">
            <div class="progress-bar" style="width: ${progress}%"></div>
          </div>
        </div>
        <div class="quiz-content">
          <div class="question">${questionData.question}</div>
          <div class="options">
            ${questionData.options
              .map(
                (option, index) =>
                  `<button class="option" data-index="${index}">${option}</button>`
              )
              .join("")}
          </div>
          <span class="question-total">${currentQuestionIndex + 1} out of ${
      questions.length
    }</span>
        </div>
        <div class="quiz-footer">
          <button class="next-btn" style="display: none;">Next Question</button>
        </div>
      </div>
    `;
  
    document.querySelectorAll(".option").forEach((btn) =>
      btn.addEventListener("click", handleAnswer)
    );
  }
  

  function handleAnswer(event) {
    const selectedAnswer = parseInt(event.target.dataset.index);
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    document.querySelectorAll(".option").forEach((btn, index) => {
      btn.disabled = true;
      if (index === correctAnswer) {
        btn.classList.add("correct");
      } else if (index === selectedAnswer) {
        btn.classList.add("incorrect");
      }
    });

    if (selectedAnswer === correctAnswer) {
      score++;
    }

    document.querySelector(".next-btn").style.display = "block";
    document.querySelector(".next-btn").addEventListener("click", handleNext);
  }

  function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    const percentage = Math.round((score / questions.length) * 100);
  
    if (percentage >= 70) {
      // Trigger confetti if the score is 70% or above
      confetti({
        particleCount: 550,
        spread: 90,
        origin: { y: 0.6 },
      });
    } else if (percentage >= 50 && percentage <= 69) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
      });
    }
  
    app.innerHTML = `
     <div class="quiz-container">
       <div class="results">
        <h2>${percentage >= 60 ? "🎉 You’ve Got the Right Props!" : "📚 Don’t Let This Hook You Down!"}</h2>
        <p>Your Score: ${score} / ${questions.length}</p>
       <p>Percentage: ${percentage}%</p>
      <button class="restart-btn">Restart Quiz</button>
     </div>
   </div>
    `;
  
    document
      .querySelector(".restart-btn")
      .addEventListener("click", restartQuiz);
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }

  showQuestion();

  //  function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Shuffle options and adjust correctAnswer index
function shuffleWithAnswers(options, correctAnswerIndex) {
  const optionPairs = options.map((option, index) => ({ option, index }));
  shuffleArray(optionPairs);

  const shuffledOptions = optionPairs.map((pair) => pair.option);
  const newCorrectAnswerIndex = optionPairs.findIndex(
    (pair) => pair.index === correctAnswerIndex
  );

  return { shuffledOptions, newCorrectAnswerIndex };
}

});
