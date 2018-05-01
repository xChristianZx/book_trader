import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/index";

class Books extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  renderList = () => {
    const { data } = this.props.api;
    if (data === null) {
      return;
    }
    const books = data.map(book => {
      return <li>{book.name}</li>;
    });
    return <ul>{books}</ul>;
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

function mapStateToProps({ api }) {
  return { api };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
