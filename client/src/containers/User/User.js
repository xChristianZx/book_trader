import React, { Component } from "react";
import { connect } from "react-redux";
import UserInfoForm from "../../components/UserInfoForm/UserInfoForm";

class User extends Component {
  render() {
    const { userInfo } = this.props.auth;
    return (
      <div className="container">
        <div>{userInfo === null ? "dude" : userInfo.name}'s book list</div>
        <hr />
        <div>
          <UserInfoForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(User);
