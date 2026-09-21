function PropsJs({ name, age, email, user, userArr }) {
  return (
    <div>
      <h1>Props in React</h1>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{email}</h3>

      <h4>{user.age}</h4>
      {userArr.map((user, index) => (
        <h2 key={index}>{user}</h2>
      ))}
    </div>
  );
}

export default PropsJs;
