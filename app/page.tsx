import styles from './page.module.css';

const LandingPage = () => {
  return(
    <div className={styles.container}>
    <div className={styles.hero}>
      <h1 className={styles.h1}>Track Your Reading Habits</h1>
      <p>Join the community of book lovers and enhance your reading experience!</p>
      <div className={styles.ctaButtons}>
        <a href="signup.html" className={styles.btn}>Sign Up</a>
        <a href="login.html" className={styles.btnSecondary}>Log In</a>
      </div>
    </div>
    <div className={styles.features}>
      <h2>Why Choose ReadTrack?</h2>
      <div className={styles.featureItem}>
        <h3>Track Your Books</h3>
        <p>Keep track of all the books you've read and want to read.</p>
      </div>
      <div className={styles.featureItem}>
        <h3>Get Insights</h3>
        <p className={styles.p}>Analyze your reading habits and set achievable goals.</p>
      </div>
      <div className={styles.featureItem}>
        <h3>Personalized Recommendations</h3>
        <p>Receive book suggestions based on your reading preferences.</p>
      </div>
    </div>
  </div>
  );
}

export default LandingPage;