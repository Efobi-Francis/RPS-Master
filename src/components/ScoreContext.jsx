import React, { createContext, useContext, useState } from 'react';

// Create a new context
const ScoreContext = createContext();

// Create a provider component to wrap your app
export function ScoreProvider({ children }) {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

  // Define a function to update the score
  const updateScore = (result) => {
    if (result === 'win') {
      setScore(score + 1);
    } else if (result === 'lose' && score > 0) {
      setScore(score - 1);
    }
  };

  // Provide the score and updateScore function to child components
  return (
    <ScoreContext.Provider value={{ score, updateScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

// Create a custom hook to consume the score and updateScore
export function useScore() {
  return useContext(ScoreContext);
}
