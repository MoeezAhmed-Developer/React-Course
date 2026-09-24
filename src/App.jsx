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
// import ClockTime from "./components/ClockTime";
import NestedLopp from "./components/NestedLoop";
import Welcome from "./components/ClassBasedComponent";
import UseEffectCount from "./components/UseEffectCount";
import Header from "./components/Header";
import PropsUseEffect from "./components/PropsUseEffect";
import InlineStyle from "./components/InlineStyle";
import DynamicCondInlineStyle from "./components/DCInlineStyle";
import ExternalStyle from "./components/ExternalStyle";
import Random from "./components/Random";
import ReactCard from "./components/ReactCard";
import UserProfile from "./components/UserProfile";
import CssModule from "./components/CssModule";
import StyledComponent from "./components/StyledComponent";
import BootstrapCss from "./components/BootstrapCss";
import StaticExample from "./components/Modal";
import Example from "./components/DemoModal";
import CardExample from "./components/BootstrapCard";
import Carousal from "./components/Carousal";
import AlertComponent from "./components/AlertComp";
import UseRefComponent from "./components/UseRefComponent";
import UnControlledComponent from "./components/UnControlledComp";
import ForwardRef from "./components/ForwardRef";
import UseFormHooks from "./components/UseFormHooks";
import SignUp from "./components/SignupUserComp";
import SignUpComponent from "./components/SignupUserComp";
import UseTransition from "./components/UseTransition";
import PureComponent from "./components/PureComponent";
import ShowHideComponent from "./components/ShowHideComp";

function App() {
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
      <Header /> <hr />
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
      <Controller /> <hr />
      <Skills /> <hr />
      <TestComponent /> <hr />
      <Radio /> <hr />
      <Dropdown /> <hr />
      <Loop /> <hr />
      <CitiesDisplay /> <hr />
      <ReuseLoop /> <hr />
      <Clock /> <hr />
      <NestedLopp /> <hr />
      <Welcome /> <hr />
      <UseEffectCount /> <hr />
      <PropsUseEffect /> <hr />
      <InlineStyle /> <hr />
      <DynamicCondInlineStyle /> <hr />
      <ExternalStyle /> <hr />
      <Random /> <hr />
      <ReactCard /> <hr />
      <UserProfile /> <hr />
      <CssModule /> <hr />
      <StyledComponent /> <hr />
      <BootstrapCss /> <hr />
      <StaticExample /> <hr />
      <Example /> <hr />
      <CardExample /> <hr />
      <Carousal /> <hr />
      <AlertComponent /> <hr />
      <UseRefComponent /> <hr />
      <UnControlledComponent /> <hr />
      <ForwardRef /> <hr />
      <UseFormHooks /> <hr />
      <SignUpComponent /> <hr />
      <UseTransition /> <hr />
      <PureComponent /> <hr />
      <ShowHideComponent /> <hr />
    </>
  );
}

export default App;
