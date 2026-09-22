function Operations() {
  const name = "Ubaid Ahmed";
  let x = 10;
  let y = 12;
  let total = x + y;

  function fruit() {
    return "Apple";
  }

  function sum(a, b) {
    return a + b;
  }

  function operation(a, b, opt) {
    if (opt == "+") {
      return a + b;
    } else if (opt == "-") {
      return a - b;
    } else if (opt == "*") {
      return a * b;
    } else {
      return "Your Operation is wrong.";
    }
  }

  const userObj = {
    name: "Moeez",
    age: 20,
    email: "moeezahmed1012@gmail.com",
  };

  const userArr = ["Moeez", "Mibsaam", "Huzaifa", "Hasan"];
  const dogImgPath =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlee5gcYfmgcGp8rAUFk5IAAmcnzG0ARvYs6qMrG4siRsusJ__h44aPRoo7Kfmju6dXFyuZmAaUtqE9PRmJAWI1irfMBpvF_gJPnQmDfvA&s=10";

  return (
    <div>
      <h2>Hi {name}</h2>
      <h3>Total: {total}</h3>
      <h4>Fruit Name is: {fruit()}</h4>
      <h2>Sum is: {sum(1, 9)}</h2>
      <h2>Result is:{operation(50, 10, "+")}</h2>
      <h2>{userObj.email}</h2>
      <h2>{userArr[0]}</h2>
      <img src={dogImgPath} alt="dog" id="dog" className="img" />
    </div>
  );
}

export default Operations;
