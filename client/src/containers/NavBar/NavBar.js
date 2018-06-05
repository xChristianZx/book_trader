import React, { Component } from "react";
import styles from "./NavBar.css";
import { NavLink } from "react-router-dom";
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
            <span>Welcome {userInfo.name}</span>
          </li>,
          <li key="2">
            <NavLink to="/books">Books</NavLink>
          </li>,
          <li key="3">
            <NavLink to="/user">User</NavLink>
          </li>,
          <li key="4" className={styles.logout}>
            <span onClick={this.props.userLogout}>Logout</span>
          </li>
        ];
      default:
        return [
          <li key="5">
            <NavLink to="/books">Books</NavLink>
          </li>,
          <li key="6">
            <a className="btn waves-effect" href="http://localhost:5000/login">
              Login/ Register
            </a>
          </li>
        ];
    }
  };

  render() {
    return (
      <nav className={`blue-grey darken-2`}>
        <div className={`nav-wrapper container`}>
          <div className="brand-logo left col s12 m3">
            <NavLink to="/">Mojave</NavLink>
          </div>
          <div className={`right col s12 m9`}>
            <ul className={``}>{this.renderNavLinks()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userLogout }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
