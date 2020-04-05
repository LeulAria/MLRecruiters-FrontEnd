import React, { useState } from "react";

function Login() {
  const [input, setinput] = useState("input");

  return (
    <div style={{ color: "#fff" }}>
      <div className="context container">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <form className="form-center">
          <div class="row">
            <div class="twelve columns">
              <label for="exampleEmailInput">Your email</label>
              <input
                class="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="exampleEmailInput"
              />
            </div>
          </div>
          <div class="row">
            <div class="twelve columns">
              <label for="exampleEmailInput">Your password</label>
              <input
                class="u-full-width"
                type="email"
                placeholder="password"
                id="exampleEmailInput"
              />
            </div>
          </div>
          <input class="button-primary" type="submit" value="Submit" />
        </form>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
