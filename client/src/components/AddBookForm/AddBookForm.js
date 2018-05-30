import React, { Component } from "react";
// import styles from "./AddBookForm.css";
import { addBook } from "../../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddBookForm extends Component {
  state = {
    title: "",
    author: "",
    coverImageURL: ""
  };
  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, author, coverImageURL } = this.state;
    const newBook = { title, author, coverImageURL };
    // Temp error handling
    if (title.length === 0 || author.length === 0) {
      console.log("Cannot submit an empty string");
      return;
    }
    console.log("addbook", newBook);
    this.props.addBook(newBook);
    this.setState({ title: "", author: "", coverImageURL: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h4 className="teal-text text-darken-2 center">Add a Book</h4>
        </div>
        <div className="row">
          <form className={"col s12"} onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
                <label>Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  onChange={this.handleChange}
                  value={this.state.author}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label>URL to Book Cover Image</label>
                <input
                  type="text"
                  name="coverImageURL"
                  onChange={this.handleChange}
                  value={this.state.coverImageURL}
                />
              </div>
            </div>
            <input className="btn right" type="submit" value="Add Book" />
            <Link className="btn-flat right" to="books">
              Back
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddBookForm);
