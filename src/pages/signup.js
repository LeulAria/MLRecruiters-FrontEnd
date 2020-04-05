import React, { useState } from "react";

function Signup() {
  const [inputs, setInputs] = useState({});
  const [roleToggler, setRoleToggler] = useState(false);

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div style={{ color: "#fff" }}>
      <div className="context container">
        <div className="signup-title">
          <h1 className="signup-title">Signup</h1>
          <div className="switch-role row">
            <p className="four columns">Customer</p>
            <div className="four columns">
              <input
                name="role-toggler"
                className="tgl tgl-ios"
                id="cb2"
                onChange={() => setRoleToggler(!roleToggler)}
                value={roleToggler}
                type="checkbox"
              />
              <label className="tgl-btn" htmlFor="cb2"></label>
            </div>
            <p className="four columns">Worker</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form-center">
          <div className="row">
            <div className="six columns">
              <label htmlFor="exampleEmailInput">Your email</label>
              <input
                required
                name="email"
                id="email"
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                autoComplete="off"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
            <div className="six columns">
              <label htmlFor="exampleEmailInput">full name</label>
              <input
                required
                name="full_name"
                id="full_name"
                className="u-full-width"
                type="text"
                placeholder="Jhon Doe"
                autoComplete="off"
                value={inputs.full_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label htmlFor="exampleEmailInput">Password</label>
              <input
                required
                name="password"
                id="password"
                className="u-full-width"
                type="password"
                placeholder="password"
                autoComplete="off"
                value={inputs.password}
                onChange={handleChange}
              />
            </div>
            <div className="six columns">
              <label htmlFor="exampleEmailInput">User name</label>
              <input
                required
                name="username"
                id="username"
                className="u-full-width"
                type="text"
                placeholder="jhon"
                autoComplete="off"
                value={inputs.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label htmlFor="exampleEmailInput">Phone number</label>
              <input
                required
                name="phone_number"
                id="phone_number"
                className="u-full-width"
                type="text"
                placeholder="tel. 908 78999 789"
                autoComplete="off"
                value={inputs.phone_number}
                onChange={handleChange}
              />
            </div>
            {roleToggler ? (
              <div className="six columns">
                <label htmlFor="exampleRecipientInput">Career</label>
                <select
                  name="career"
                  id="career"
                  onChange={handleChange}
                  className="u-full-width"
                  defaultValue="Electricians"
                  value={inputs.career}
                >
                  <option value="Plumbers">Plumbers </option>
                  <option value="Mechanics">Mechanics</option>
                  <option value="Electricians">Electricians</option>
                </select>
              </div>
            ) : null}
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
        </ul>
      </div>
    </div>
  );
}

export default Signup;
