function Courses() {
  const courses = ["Computer Science", "English", "Math", "Design"];

  return (
    <section style={{ padding: "50px", background: "#eef2f7" }}>
      <h2>Courses</h2>
      <ul>
        {courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;