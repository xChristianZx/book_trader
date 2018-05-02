import React, { Component } from "react";
import AddBookForm from "../../components/AddBookForm/AddBookForm";

class User extends Component {
  render() {
    return (
      <div>
        <h2>USER</h2>
        <div>User book list</div>
        <div>
          <AddBookForm />
        </div>
      </div>
    );
  }
}

export default User;
