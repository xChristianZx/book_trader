import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userUpdate } from "../../actions/index";

class UserInfoForm extends Component {
  state = { name: "", city: "", state: "" };

  componentDidMount() {
    this.onLoadPopulateForm();
  }

  onLoadPopulateForm = () => {
    if (this.props.auth.userInfo === null) {
      return;
    }
    const { name, city, state } = this.props.auth.userInfo;
    this.setState({ name, city, state });
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, city, state } = this.state;
    const { _id } = this.props.auth.userInfo;
    const newInfo = { _id, name, city, state };
    console.log(newInfo);
    this.props.userUpdate(newInfo);
  };

  render() {
    const { userInfo } = this.props.auth;
    /* Full Name, city, state */
    return (
      <div className="container">
        <div className="row">
          <h4 className="teal-text text-darken-2 center">
            Update Account Info
          </h4>
        </div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                />
                <label className={userInfo ? "active" : null}>Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m8">
                <input
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  value={this.state.city}
                  required
                />
                <label className={userInfo ? "active" : null}>City</label>
              </div>
              <div className="input-field col s12 m4">
                <input
                  type="text"
                  name="state"
                  onChange={this.handleChange}
                  value={this.state.state}
                  required
                />
                <label className={userInfo ? "active" : null}>State</label>
              </div>
            </div>
            <div className="row">
              <button className="btn" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userUpdate }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);
