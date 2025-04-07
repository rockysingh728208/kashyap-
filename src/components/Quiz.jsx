import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import { toast } from "react-toastify";
import questions from "../data/questions"; 

const Quiz = () => {
  const { setUser, user, setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState({});

  const handleOptionChange = (qId, option) => {
    setUserAnswers({ ...userAnswers, [qId]: option });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let score = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correct) score++;
    });

    setAnswers(userAnswers); 
    setUser({ ...user, score });
    toast.success(`You scored ${score}/${questions.length}`);
    navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-6">
      {questions.map((q) => (
        <div key={q.id} className="p-4 border rounded shadow-sm">
          <p className="font-semibold">{q.question}</p>
          <div className="space-y-2 mt-2">
            {q.options.map((opt) => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={opt}
                  checked={userAnswers[q.id] === opt}
                  onChange={() => handleOptionChange(q.id, opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Submit Quiz
      </button>
    </form>
  );
};

export default Quiz;
