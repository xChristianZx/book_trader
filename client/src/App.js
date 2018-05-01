import React, { Component } from "react";
import styles from "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./containers/NavBar/NavBar";
import Books from "./containers/Books/Books";

const Landing = () => <div>Landing Page</div>;
const User = () => <div>User Page</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.layout_wrapper}>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route path="/books" component={Books} />
          <Route path="/user" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
