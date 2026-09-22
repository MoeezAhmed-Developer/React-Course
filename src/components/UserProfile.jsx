import styles from "../css/user-profile.module.css";

function UserProfile() {
  return (
    <div>
      <h1>Style with css module</h1>
      <div className={styles.profile}>
        <h2>Muhammad Moeez</h2>
        <p>Frontend Developer</p>
        <p>Email: moeez@example.com</p>
        <p>Location: Karachi, Pakistan</p>
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default UserProfile;
