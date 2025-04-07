// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ChildA from './components/ChildA';
// import {createContext} from 'react'

// //step1
// const UserContext = createContext();
// //step2 wrap all the child inside a provider

// //step3:pass value
// //step4:consumer k under jaakar consume kar lo

// function App() {
//   const [user, setUser] = useState({name:"sagar kashyap"})

//   return (
//     <>
// <UserContext.Provider value={user}>
// <ChildA/>
// </UserContext.Provider>

//     </>
//   )
// }

// export default App
// export {UserContext}

import { Routes, Route, Navigate } from "react-router-dom";
import UserForm from "./components/UserForm";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useContext } from "react";
import { QuizContext } from "./context/QuizContext";

const App = () => {
  const { user } = useContext(QuizContext);

  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/quiz" element={user.name ? <Quiz /> : <Navigate to="/" />} />
      <Route path="/result" element={user.score !== null ? <Result /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;


