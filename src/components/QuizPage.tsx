import React from "react";

const QuizPage = ({ questions, selectedTopics, onFinish, onBack }: any) => {
  // Placeholder: UI for quiz questions and navigation
  return (
    <div className="quiz-page">
      <button onClick={onBack}>Back to Filter</button>
      <h2>Quiz In Progress</h2>
      {/* TODO: Render questions, options, progress bar, mascot feedback */}
      <button onClick={() => onFinish([], {})}>Done</button>
    </div>
  );
};

export default QuizPage;
