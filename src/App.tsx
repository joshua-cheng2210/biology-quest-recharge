import React from "react";
import "./styles/theme.css";
import Mascot from "./components/Mascot";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";

// Main app state
const App = () => {
  const [view, setView] = React.useState("home"); // home | quiz | results
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);
  const [quizQuestions, setQuizQuestions] = React.useState<any[]>([]);
  const [userAnswers, setUserAnswers] = React.useState<any[]>([]);
  const [results, setResults] = React.useState<any>(null);

  // Handler to start quiz
  const startQuiz = (topics: string[], questions: any[]) => {
    setSelectedTopics(topics);
    setQuizQuestions(questions);
    setView("quiz");
  };

  // Handler to finish quiz
  const finishQuiz = (answers: any[], stats: any) => {
    setUserAnswers(answers);
    setResults(stats);
    setView("results");
  };

  // Handler to go back to home
  const resetQuiz = () => {
    setSelectedTopics([]);
    setQuizQuestions([]);
    setUserAnswers([]);
    setResults(null);
    setView("home");
  };

  return (
    <div className="app-root">
      <Mascot />
      {view === "home" && (
        <HomePage onStartQuiz={startQuiz} />
      )}
      {view === "quiz" && (
        <QuizPage
          questions={quizQuestions}
          selectedTopics={selectedTopics}
          onFinish={finishQuiz}
          onBack={resetQuiz}
        />
      )}
      {view === "results" && (
        <ResultsPage
          results={results}
          onRetake={() => setView("quiz")}
          onNewQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default App;
