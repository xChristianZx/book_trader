import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.css";

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
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
