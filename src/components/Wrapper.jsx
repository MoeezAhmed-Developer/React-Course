function Wrapper({ children, color = "green" }) {
  return (
    <div
      style={{
        color: color,
        border: "2px solid green",
        width: "300px",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
