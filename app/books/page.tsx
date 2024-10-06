import styles from "./page.module.css";

const Books = () => {
  return (
    <section className={styles.myBooks}>
      <h1>My Books</h1>
      <button className={styles.addBookBtn}>Add New Book</button>

      <div className={styles.bookList}>
        <div className={styles.bookItem}>
          <h2>Book Title</h2>
          <p>Author: Author Name</p>
          <p>Progress: 50%</p>
          <div className={styles.bookActions}>
            <button>Edit</button>
            <button>Delete</button>
            <button>Mark as Completed</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
