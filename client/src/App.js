import React, { Component } from "react";
// import styles from "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Landing = () => <div>Landing Page</div>;
const Books = () => <div>List of Books page</div>;
const User = () => <div>User Page</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/books" component={Books} />
          <Route path="/user" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
