import React, { useState } from "react";
import "./logincss.css";

function LoginStart() {
  const [tog, setTog] = useState(false);

  const showLoginForm = () => {
    alert(tog);
    setTog(true);
  };

  console.log(tog);
  return (
    <div>
      <div className={!tog ? "transition" : " transition anim-trans"}></div>
      <div className="content">
        <h1>Heading title</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <button style={{ color: "red" }} onClick={showLoginForm}>
          Click
        </button>
      </div>
    </div>
  );
}

export default LoginStart;
