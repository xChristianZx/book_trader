import React from "react";
import styles from "./BookItem.css";

const BookItem = ({ data }) => {
  const { title, author, coverImageURL } = data;
  return (
    // <li className={styles.card_container}>
    <li className={`col s12 m6 l4 card large`}>
      <div className={`${styles.image_container} card-image`}>
        <img src={coverImageURL} alt="Book Cover" />
      </div>
      <div className="card-content">
        <p className="card-title truncate" alt={title}>
          {title}
        </p>
        <p alt={author}>{author}</p>
      </div>
      <div />
    </li>
  );
};

export default BookItem;
