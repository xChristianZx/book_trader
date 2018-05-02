import React, { Component } from "react";
import styles from "./Books.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/index";
import BookItem from "../../components/BookItem/BookItem";

class Books extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  renderList = () => {
    const { isFetching, data } = this.props.api;
    if (isFetching || data === null) {
      return <div>Loading...</div>;
    }
    const books = data.map(book => {
      return <BookItem data={book} key={book._id} />;
    });
    return <ul className={styles.list_container}>{books}</ul>;
  };

  render() {
    return <div className={styles.list_wrapper}>{this.renderList()}</div>;
  }
}

function mapStateToProps({ api }) {
  return { api };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
