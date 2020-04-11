import React from "react";

const FormCreateQuestion = (props) => (
  <div className="FormCreateQuestion">
    <form method="POST" action="create" onSubmit={props.onCreate}>
      <label className="form-group">
        <span>Question:</span>
        <input
          type="text"
          className="form-control"
          name="question"
          required
        ></input>
        {props.user ? (
          <button type="sumbit" className="btn btn-primary">
            Pregunta!
          </button>
        ) : (
          <button type="" className="btn btn-primary" disabled>
            Inicia sesión para preguntar
          </button>
        )}
      </label>
    </form>
  </div>
);

export default FormCreateQuestion;
