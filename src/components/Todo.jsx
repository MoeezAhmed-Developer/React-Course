function Todo() {
  const path =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxf3Wcd0XeqnXQM36FIUQ2IOkP3WVD2-CUCf6O9gRpgt5rP2foYIw-W6AC80P85WazUZnohSBwGSQgh0zdUNLzqm50yzdCv32wZOjk6Sd1w&s=10";
  return (
    <div>
      <h1>Muhammad Moeez Todos</h1>
      <img src={path} alt="Cat" className="photo img" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Reharse new movie scene</li>
        <li>Improve the specturm technalogy</li>
      </ul>

      <button onClick={() => alert("function called")}>click me</button>
    </div>
  );
}

export default Todo;
