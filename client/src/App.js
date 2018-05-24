import React, { Component } from "react";
import styles from "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchUser } from "./actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NavBar from "./containers/NavBar/NavBar";
import Books from "./containers/Books/Books";
import User from "./containers/User/User";

const Landing = () => <div>Landing Page</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
