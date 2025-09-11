import React from "react";

const HomePage = ({ onStartQuiz }: { onStartQuiz: (topics: string[], questions: any[]) => void }) => {
  // Placeholder: UI for topic selection and Quiz Me button
  return (
    <div className="home-page">
      <h2>Select Topics</h2>
      {/* TODO: Render topic checkboxes and Quiz Me button */}
      <button className="quiz-me-btn" onClick={() => onStartQuiz(["Genetics"], [])}>Quiz Me!</button>
    </div>
  );
};

export default HomePage;
