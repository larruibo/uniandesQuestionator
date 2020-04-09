import React from "react";

const FormCreateQuestion = ({}) => (
  <div className="FormCreateQuestion">
    <form>
      <label className="form-group">
        <span>Question:</span>
        <input type="text" className="form-control"></input>
        <button type="sumbit" className="btn btn-primary">
          Create
        </button>
      </label>
    </form>
  </div>
);

export default FormCreateQuestion;
