import React, { useState } from "react";
// import axios from "axios";

function Login() {
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
    // axios.post("/users/login/", { ...inputs }).then(res => {
    //   console.log(res);
    // });
  };

  return (
    <div style={{ color: "#fff" }}>
      <div className="context container">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <form onSubmit={handleSubmit} className="form-center">
          <div className="row">
            <div className="twelve columns">
              <label htmlFor="exampleEmailInput">Your email</label>
              <input
                required
                id="username"
                name="username"
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                value={inputs.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <label htmlFor="exampleEmailInput">Your password</label>
              <input
                required
                id="password"
                name="password"
                className="u-full-width"
                type="password"
                placeholder="password"
                value={inputs.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>

      <div className="area">
        <ul className="circles">
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
