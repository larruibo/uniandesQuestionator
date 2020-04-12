import React from "react";
//import PropTypes from "prop-types";
import Answers from "./Answers.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Questions = (props) => {
  const renderQuestions = () => {
    console.log("questions", props.user);
    return props.questions.map((q, i) => (
      <li>
        <div key={"question" + i}>
          <Link to={`${props.match.url}/${q._id}`}>{q.question}</Link>
        </div>
      </li>
    ));
  };
  return <div className="Questions">{renderQuestions()}</div>;
};

// Questions.propTypes = {
//   questions: PropTypes.array.isRequired
// };

export default Questions;
