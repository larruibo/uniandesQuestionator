import React, { useRef } from "react";
//import PropTypes from "prop-types";

const Answers = (props) => {
  const formRef = useRef();

  const renderAnswers = () =>
    props.answers.map((a, i) => (
      <div className="input-group" key={"answer" + a + props.question + i}>
        <div className="input-group-prepend">
          <div className="input-group-text">
            <label>
              <input
                type="radio"
                name="answer"
                value={a.answer}
                required={true}
              />
              {a.answer} <span>{a.votes}</span>
            </label>
          </div>
        </div>
      </div>
    ));

  const onVote = (evt) => {
    evt && evt.preventDefault();

    const formData = new FormData(formRef.current);
    const answer = formData.get("answer");
    props.onVote(props.question, answer);
  };
  console.log("answers", props.user);
  return (
    <div className="Answers">
      <form
        ref={formRef}
        onSubmit={onVote}
        action={`${props._id}/update`}
        method="post"
      >
        {renderAnswers()}
        {props.user ? (
          <button type="sumbit" className="my-3 btn btn-secondary">
            Vote {props._id}
          </button>
        ) : (
          <button type="" className="my-3 btn btn-secondary" disabled>
            Inicia sesión para responder
          </button>
        )}
      </form>
    </div>
  );
};

// Answers.propTypes = {
//   : PropTypes.
// };

export default Answers;
