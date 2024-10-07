import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 BookTracker. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <Link href="#" className={styles.anchor}>
          Contact
        </Link>
        <Link href="#" className={styles.anchor}>
          Privacy Policy
        </Link>
        <Link href="#" className={styles.anchor}>
          Terms &amp; Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
