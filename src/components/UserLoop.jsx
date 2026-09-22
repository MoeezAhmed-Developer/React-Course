function UserLoop({ data }) {
  return (
    <div
      style={{
        padding: "10px",
        border: " 1px solid #ccc",
        color: "green",
        borderRadius: "4px",
        width: "230px",
        marginBottom: "10px",
      }}
    >
      <h3>{data.name}</h3>
      <h3>{data.email}</h3>
      <h4>{data.age}</h4>
    </div>
  );
}

export default UserLoop;
