import React, { Component } from "react";
import styles from "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./containers/NavBar/NavBar";
import Books from "./containers/Books/Books";
import User from "./containers/User/User";

const Landing = () => <div>Landing Page</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.layout_wrapper}>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route path="/books" component={Books} />
          <Route exact path="/user" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
