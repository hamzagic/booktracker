import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Track Your Reading Habits Effortlessly!</h1>
          <Button>Get Started</Button>
        </section>
        <section className={styles.features}>
          <div className={styles.feature}>
            <h2>Recently Read</h2>
          </div>
          <div className={styles.feature}>
            <h2>Reading Goals</h2>
          </div>
          <div className={styles.feature}>
            <h2>Recommended Reads</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
