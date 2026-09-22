function ClockTime({ color }) {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: color,
        borderRadius: "4px",
        width: "300px",
        padding: "10px",
      }}
    >
      <h3>{new Date().toLocaleTimeString()}</h3>
    </div>
  );
}

export default ClockTime;
