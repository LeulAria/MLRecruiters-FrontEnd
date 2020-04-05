import React, { useState } from "react";

function Signup() {
  const [input, setinput] = useState("input");

  return (
    <div style={{ color: "#fff" }}>
      <div className="context container">
        <h1 style={{ textAlign: "center" }}>Signup</h1>
        <form className="form-center">
          <div class="row">
            <div class="six columns">
              <label for="exampleEmailInput">Your email</label>
              <input
                class="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="exampleEmailInput"
              />
            </div>
            <div class="six columns">
              <label for="exampleEmailInput">full name</label>
              <input
                class="u-full-width"
                type="text"
                placeholder="Jhon Doe"
                id="exampleEmailInput"
              />
            </div>
          </div>
          <div class="row">
            <div class="six columns">
              <label for="exampleEmailInput">Password</label>
              <input
                class="u-full-width"
                type="password"
                placeholder="password"
                id="exampleEmailInput"
              />
            </div>
            <div class="six columns">
              <label for="exampleEmailInput">User name</label>
              <input
                class="u-full-width"
                type="text"
                placeholder="jhon"
                id="exampleEmailInput"
              />
            </div>
          </div>
          <div class="row">
            <div class="six columns">
              <label for="exampleEmailInput">Phone number</label>
              <input
                class="u-full-width"
                type="email"
                placeholder="tel. 908 78999 789"
                id="exampleEmailInput"
              />
            </div>
            <div class="six columns">
              <label for="exampleRecipientInput">Career</label>
              <select class="u-full-width" id="exampleRecipientInput">
                <option value="Electricians">Electricians</option>
                <option value="Plumbers">Plumbers</option>
                <option value="Mechanics">Mechanics</option>
              </select>
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

export default Signup;

// import React, { useState } from "react";

// function Submit() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = e => {
//     e.persist();
//     setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("subited");
//     console.log(inputs);
//   };
//   return (
//     <div className="page_container">
//       <div className="context context-center-form">
//         <h1 className="center">Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div class="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               class="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//             <small id="emailHelp" class="form-text text-muted">
//               We'll never share your email with anyone else.
//             </small>
//           </div>
//           <input
//             required
//             name="full_name"
//             className="block-width"
//             type="text"
//             placeholder="full name"
//             onChange={handleChange}
//           />
//           <input
//             required
//             name="email"
//             className="block-width"
//             type="email"
//             placeholder="email"
//             onChange={handleChange}
//           />
//           <input
//             required
//             name="password"
//             className="block-width"
//             type="password"
//             placeholder="password"
//             onChange={handleChange}
//           />
//           <input
//             required
//             name="username"
//             className="block-width"
//             type="text"
//             placeholder="username"
//             onChange={handleChange}
//           />
//           <input
//             required
//             name="phone_number"
//             className="block-width"
//             type="telephone"
//             placeholder="phone number"
//             onChange={handleChange}
//           />
//           <select
//             required
//             name="career"
//             className="block-width submit-center"
//             onChange={handleChange}
//           >
//             <option value="Electricians">Electricians</option>
//             <option value="Plumbers">Plumbers</option>
//             <option value="Mechanics">Mechanics</option>
//           </select>
//           <input
//             className="block-width submit-center"
//             type="submit"
//             value="login"
//           />
//         </form>
//       </div>

//       <div class="area">
//         <ul class="circles">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Submit;
