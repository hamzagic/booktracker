'use client';
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import CalendarComponent from "@/components/calendar/Calendar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/add-book')
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Track Your Reading Habits Effortlessly!</h1>
          <Button onClick={handleClick}>Add Book</Button>
        </div>
        <div className={styles.calendar}>
          <CalendarComponent />
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>Recently Read</h2>
          </div>
          <div className={styles.feature}>
            <h2>Reading Goals</h2>
          </div>
          <div className={styles.feature}>
            <h2>Recommended Reads</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
