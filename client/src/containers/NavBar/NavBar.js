import React, { Component } from "react";
import styles from "./NavBar.css";
import { Link } from "react-router-dom";
import { fetchUser, userLogout } from "../../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <header className={styles.wrapper}>
        <div className={styles.container}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/books">Books</Link>
            <Link to="/user">User</Link>
            {/* SHAV  - how do I do this using Redux???  */}
            <a href="http://localhost:5000/login">Login</a>

            <button onClick={this.props.userLogout}>Logout</button>
          </div>
        </div>
      </header>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, userLogout }, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);
