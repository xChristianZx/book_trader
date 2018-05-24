import React, { Component } from "react";
import styles from "./NavBar.css";
import { Link } from "react-router-dom";
import { userLogout } from "../../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class NavBar extends Component {
  renderNavLinks = () => {
    const { isLoggedIn, userInfo } = this.props.auth;
    switch (isLoggedIn) {
      case true:
        return [
          <li key="1">
            <p>Welcome {userInfo.name}</p>
          </li>,
          <li key="2">
            <Link to="/user">User</Link>
          </li>,
          <li key="3">
            <p onClick={this.props.userLogout}>Logout</p>
          </li>
        ];
      default:
        return [
          <li key="4">
            <a href="http://localhost:5000/login">Login/ Register</a>
          </li>
        ];
    }
  };

  render() {
    return (
      <header className={styles.wrapper}>
        <div className={styles.container}>
          <div>
            <Link to="/">JungleBooks</Link>
          </div>
          <div className={styles.navlinks} >
            <Link to="/books">Books</Link>
            <ul>{this.renderNavLinks()}</ul>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userLogout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
