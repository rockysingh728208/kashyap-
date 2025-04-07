// import { useContext } from "react";
// import { QuizContext } from "../context/QuizContext";
// import { useNavigate } from "react-router-dom";

// const Result = () => {
//   const { user } = useContext(QuizContext);
//   const navigate = useNavigate();

//   const handleRestart = () => {
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 mt-10 shadow-lg bg-white rounded-xl space-y-4">
//       <h2 className="text-2xl font-bold text-center">Quiz Result</h2>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Admission No:</strong> {user.admissionNo}</p>
//       <p className="text-xl mt-4"><strong>Your Score:</strong> {user.score} / 5</p>
//       <button onClick={handleRestart} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
//         Restart Quiz
//       </button>
//     </div>
//   );
// };

// export default Result;
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

const Result = () => {
  const { user, answers } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Quiz Result</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Admission No:</strong> {user.admissionNo}</p>
      <p className="text-xl font-semibold mt-4">Score: {user.score} / {questions.length}</p>

      <hr className="my-4" />
      <h3 className="text-xl font-semibold mb-2">Detailed Feedback:</h3>

      <div className="space-y-4">
        {questions.map((q) => {
          const userAns = answers[q.id];
          const isCorrect = userAns === q.correct;

          return (
            <div key={q.id} className="p-4 border rounded-md">
              <p className="font-semibold">{q.question}</p>
              <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                Your Answer: {userAns || "Not Answered"}
              </p>
              {!isCorrect && (
                <p className="text-blue-600">Correct Answer: {q.correct}</p>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={handleRestart} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
