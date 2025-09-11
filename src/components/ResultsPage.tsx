import React from "react";

const ResultsPage = ({ results, onRetake, onNewQuiz }: any) => {
  // Placeholder: UI for results summary and actions
  return (
    <div className="results-page">
      <h2>Quiz Complete!</h2>
      {/* TODO: Render score, breakdown, mascot celebration, retake/new quiz buttons */}
      <button onClick={onRetake}>Retake Quiz</button>
      <button onClick={onNewQuiz}>New Quiz</button>
    </div>
  );
};

export default ResultsPage;
