function AddUser({ setUser }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(evt) => setUser(evt.target.value)}
      />
    </div>
  );
}

export default AddUser;
