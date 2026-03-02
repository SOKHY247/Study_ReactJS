function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Welcome to Our School</h1>
      <p>Education for a better future 🎓</p>
      <button>Enroll Now</button>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#f1f5f9",
  },
};

export default Hero;