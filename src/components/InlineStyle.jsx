function InlineStyle() {
  return (
    <div>
      <h1> Inline Style in React</h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "200px",
          boxShadow: "2px 2px 17px 3px #ccc",
        }}
      >
        <img
          src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
          alt="User Image"
          style={{
            width: "200px",
            borderRadius: "8px",
            borderBottom: "1px solid #ccc",
          }}
        />
        <div style={{ padding: "10px" }}>
          <h3>Muhammad Moeez</h3>
          <p style={{ color: "#333", marginTop: "-10px", fontSize: "14px" }}>
            Website developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default InlineStyle;
