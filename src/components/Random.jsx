function Random() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#001542",
        borderRadius: "15px",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1
        style={{
          color: "#ffb30d",
          marginBottom: "15px",
        }}
      >
        React Inline Styling
      </h1>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#f1f1f1",
        }}
      >
        React allows you to style elements directly using the style attribute.
        Inline styles are written as JavaScript objects inside JSX.
      </p>

      <button
        style={{
          backgroundColor: "#ffb30d",
          color: "#001542",
          border: "none",
          padding: "12px 25px",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Learn more
      </button>
    </div>
  );
}

export default Random;
