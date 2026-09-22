import Todo from "./components/Todo";
import Operations from "./components/Operations";
import HandleFruits from "./components/State";
import Count from "./components/IncreaseCount";
import Toggle from "./components/Toggle";
import CountToggle from "./components/CountToggle";
import PropsJs from "./components/Props";
import User from "./components/User";
import Wrapper from "./components/Wrapper";
import InputField from "./components/InputField";
import Controller from "./components/Controller";
import Student from "./components/Student";
import Skills from "./components/Skills";
import TestComponent from "./components/Test";
import Radio from "./components/radio";
import Dropdown from "./components/Dropdown";
import Loop from "./components/Loop";
import CitiesDisplay from "./components/Cities";
import ReuseLoop from "./components/ReuseLoop";
import Clock from "./components/Clock";
import ClockTime from "./components/ClockTime";
import NestedLopp from "./components/NestedLoop";

function App() {
  let x = 0;
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
    <>
      <h1>Hello World</h1>
      <hr />
      <Todo />
      <hr />
      <Operations />
      <hr />
      <HandleFruits />
      <hr />
      <Count />
      <hr />
      <Toggle />
      <hr />
      <CountToggle />
      <hr />
      <PropsJs
        name={name}
        age={age}
        email={email}
        user={userObj}
        userArr={userArr}
      />
      <hr />
      <Student />
      <hr />
      <User name="Moeez" /> <hr />
      <Wrapper color="orange">
        <h1>Hello User</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello everyone</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello React JS</h1>
      </Wrapper>
      <hr />
      {/* <InputField /> */}
      {/* <Controller /> */}
      <Skills /> <hr />
      <TestComponent /> <hr />
      <Radio /> <hr />
      <Dropdown /> <hr />
      <Loop /> <hr />
      <CitiesDisplay /> <hr />
      <ReuseLoop /> <hr />
      <Clock /> <hr />
      <NestedLopp />
    </>
  );
}

export default App;
