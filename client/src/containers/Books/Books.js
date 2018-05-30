import React, { Component } from "react";
// import styles from "./Books.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/index";
import { Link, NavLink } from "react-router-dom";
import BookItem from "../../components/BookItem/BookItem";
import Loading from "../../components/Loading/Loading";

class Books extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  renderList = () => {
    const { isFetching, data } = this.props.api;
    if (isFetching || data === null) {
      return <Loading />;
    }
    const books = data.map(book => {
      return <BookItem data={book} key={book._id} />;
    });
    // return <ul className={styles.list_container}>{books}</ul>;
    return (
      <div>
        <div className="row">
          <div className="section">
            <NavLink className="btn right" to="/addbook">
              <i className="material-icons right">add</i>
              Add Book
            </NavLink>
          </div>
        </div>
        <ul className={"row"}>{books}</ul>
      </div>
    );
  };

  render() {
    // return <div className={styles.list_wrapper}>{this.renderList()}</div>;
    return <div className={"container"}>{this.renderList()}</div>;
  }
}

function mapStateToProps({ api }) {
  return { api };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
