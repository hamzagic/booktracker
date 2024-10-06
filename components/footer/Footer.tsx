import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 ReadTrack. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <Link href="#" className={styles.anchor}>
          Privacy Policy
        </Link>
        <Link href="#" className={styles.anchor}>
          Contact
        </Link>
        <Link href="#" className={styles.anchor}>
          Social Media
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
