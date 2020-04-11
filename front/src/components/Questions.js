import React from "react";
//import PropTypes from "prop-types";
import Answers from "./Answers.js";

const Questions = (props) => {
  const renderQuestions = () => {
    console.log("questions", props.user);
    return props.questions.map((q, i) => (
      <div key={"question" + i}>
        <h2>{q.question}</h2>
        <Answers
          _id={q._id}
          user={props.user}
          answers={q.answers}
          question={q.question}
          onVote={props.onVote}
        />
      </div>
    ));
  };
  return <div className="Questions">{renderQuestions()}</div>;
};

// Questions.propTypes = {
//   questions: PropTypes.array.isRequired
// };

export default Questions;
