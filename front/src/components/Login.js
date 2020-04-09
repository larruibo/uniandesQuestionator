import React from "react";

const Login = ({}) => (
  <div className="Login">
    <form action="/login" method="post">
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
);

export default Login;
