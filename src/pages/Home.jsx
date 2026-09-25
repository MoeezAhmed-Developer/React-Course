import CountToggle from "../components/CountToggle";
import Count from "../components/IncreaseCount";
import Operations from "../components/Operations";
import HandleFruits from "../components/State";
import Todo from "../components/Todo";
import Toggle from "../components/Toggle";
import PropsJs from "../components/Props";
import User from "../components/User";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import Controller from "../components/Controller";
import Student from "../components/Student";

function HomePage() {
  let name = "Moeez";
  let age = 20;
  let email = "react@test.com";

  const userObj = {
    name: "Bruce",
    age: 34,
    email: "bruce@test.com",
  };

  const userArr = ["Peter", "Bruce", "Thiel"];

  return (
    <div>
      <h1>Hello World</h1> <hr />
      <Todo /> <hr />
      <Operations /> <hr />
      <HandleFruits /> <hr />
      <Count /> <hr />
      <Toggle /> <hr />
      <CountToggle /> <hr />
      <PropsJs
        name={name}
        age={age}
        email={email}
        user={userObj}
        userArr={userArr}
      />
      <hr />
      <Student /> <hr />
      <User name="Moeez" /> <hr />
      <Wrapper color="orange">
        <h1>Hello User</h1>
      </Wrapper>
      <hr />
      <InputField /> <hr />
    </div>
  );
}

export default HomePage;
