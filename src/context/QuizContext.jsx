import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", email: "", admissionNo: "", score: null });
  const [answers, setAnswers] = useState([]);

  return (
    <QuizContext.Provider value={{ user, setUser, answers, setAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};
