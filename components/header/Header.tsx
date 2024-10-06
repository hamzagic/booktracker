import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.anchor}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/books" className={styles.anchor}>
              My Books
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.anchor}>
              Stats
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.anchor}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
