import React, { useState, useEffect } from "react";
import Footer from "./layout/Footer.js";
import Questions from "./components/Questions.js";
import FormCreateQuestion from "./components/FormCreateQuestion.js";
import Login from "./components/Login.js";
let initialQuestions = [
  // {
  //   question: "Dummy?",
  //   answers: [
  //     { answer: "I'm dummy", votes: 10 },
  //     { answer: "You're the dummy", votes: 2 },
  //   ],
  // },
  // {
  //   question: "Dummy Too?",
  //   answers: [
  //     { answer: "I'm dummy", votes: 10 },
  //     { answer: "You're the dummy", votes: 2 },
  //   ],
  // },
];

const App = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, []);

  useEffect(() => {
    fetch("/getQuestions")
      .then((res) => res.json())
      .then((preg) => {
        console.log(initialQuestions);
        console.log(preg);
        initialQuestions = preg;
        return setQuestions(initialQuestions);
      });
  }, []);

  const onCreate = () => {
    alert("creating");
  };
  const onVote = (question, answer) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];

      const qObj = newQuestions.find((q) => q.question === question);
      const newAnswers = qObj.answers.map((a) =>
        a.answer === answer ? { answer: a.answer, votes: a.votes + 1 } : a
      );
      qObj.answers = newAnswers;
      fetch(`${qObj._id}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(qObj),
      });
      return newQuestions;
    });
  };

  const onLogout = () => {
    fetch("/logout")
      .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          setUser(null);
        } else {
          alert("error");
        }
      });
  };
  return (
    <div className="container">
      <h2>Questionator!!!</h2>
      {!user ? (
        <Login />
      ) : (
        <div>
          Welcome! {user.username}
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
      <div className="row">
        <div className="col-8">
          <Questions user={user} questions={questions} onVote={onVote} />
        </div>
        <div className="col-4">
          <FormCreateQuestion user={user} onCreate={onCreate} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
