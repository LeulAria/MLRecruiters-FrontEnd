import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";

// import axios from "axios";

function App() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get("/users/", {}).then(res => {
  //       setData(res.data);
  //       console.log("The res data: ", res.data);
  //     });
  //   };

  //   fetchData();
  // }, []);

  // console.log("The data: ", data);
  return (
    <div className="app_container">
      <div className="mainContent_container">
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
