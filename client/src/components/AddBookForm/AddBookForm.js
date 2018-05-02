import React, { Component } from "react";
import styles from "./AddBookForm.css";
import { addBook } from "../../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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
  };

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label>Author:</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={this.handleChange}
            value={this.state.author}
          />
          <label>Image of Book Cover:</label>
          <input
            type="text"
            name="coverImageURL"
            placeholder="Url to image of book cover"
            onChange={this.handleChange}
            value={this.state.coverImageURL}
          />
          <input type="submit" value="Add Book" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddBookForm);
