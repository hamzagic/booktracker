import styles from "./page.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <h1>Create Your Account</h1>
      <form id={styles.signupForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input className={styles.input} type="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            required
          />
        </div>
        <button type="submit" className={styles.signupBtn}>
          Sign Up
        </button>
      </form>

      <div className={styles.orSeparator}>OR</div>
      <div
        id="g_id_onload"
        data-client_id="YOUR_GOOGLE_CLIENT_ID"
        data-login_uri="https://yourdomain.com/your_login_endpoint"
        data-auto_prompt="false"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="sign_in_with"
        data-size="large"
      ></div>
    </div>
  );
};

export default Signup;
