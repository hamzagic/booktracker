import styles from './page.module.css';
import Button from '@/components/button/Button';

const Settings = () => {
  return(
    <section className={styles.settings}>
      <h1>User Settings</h1>

      <form id="profile-form">
        <h2 className={styles.h2}>Profile</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input className={styles.input} type="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Change Password:</label>
          <input className={styles.input} type="password" name="password" placeholder="Leave blank to keep current password" />
        </div>
        <Button>Save Changes</Button>
      </form>

      <form id="preferences-form">
        <h2 className={styles.h2}>Reading Preferences</h2>
        <div className={styles.preferencesContainer}>
          <label htmlFor="notifications" className={styles.label}>Enable Notifications:</label>
          <input className={styles.input} type="checkbox" name="notifications" />
        </div>
        {/* <div className={styles.formGroup}>
          <label htmlFor="theme" className={styles.label}>Theme:</label>
          <select className={styles.select} id="theme" name="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div> */}
        <Button>Update Preferences</Button>
      </form>

      <form id="account-management-form">
        <h2 className={styles.h2}>Account Management</h2>
        <div className={styles.btnContainer}>
          <Button color='danger'>Delete Account</Button>
        </div>
      </form>
      <h2>Log out</h2>
      <Button>Log Out</Button>
    </section>
  );
}

export default Settings;