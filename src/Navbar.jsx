function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>🏫 My School</h2>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#0d6efd",
    color: "white",
  },
};

export default Navbar;