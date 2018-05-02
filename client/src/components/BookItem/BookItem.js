import React from "react";
import styles from "./BookItem.css";

const BookItem = ({ data }) => {
  const { title, author, coverImageURL } = data;
  return (
    <li className={styles.card_container}>
      <div className={styles.image_container}>
        <img src={coverImageURL} alt="Book Cover" />
      </div>
      <div>{title}</div>
      <div>{author}</div>
    </li>
  );
};

export default BookItem;
