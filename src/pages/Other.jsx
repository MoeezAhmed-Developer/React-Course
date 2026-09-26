import UseTransition from "../components/UseTransition";
import PureComponent from "../components/PureComponent";
import ShowHideComponent from "../components/ShowHideComp";
import DerivedState from "../components/DerivedState";
import LiftUpState from "../components/LiftUpState";
import UpdatingObject from "../components/UpdatingObject";
import UpdatingArray from "../components/UpdatingArray";
import UseActionState from "../components/UseActionState";
import UseIdHook from "../components/UseId";
import ContextApi from "../components/context-api/ContextApi";
import TailwindComponent from "../components/TailwindComp";

function OtherPage() {
  document.title = "Others | React";
  return (
    <div>
      <UseTransition /> <hr />
      <PureComponent /> <hr />
      <ShowHideComponent /> <hr />
      <DerivedState /> <hr />
      <LiftUpState /> <hr />
      <UpdatingObject /> <hr />
      <UpdatingArray /> <hr />
      <UseActionState /> <hr />
      <UseIdHook /> <hr />
      <ContextApi /> <hr />
      <TailwindComponent /> <hr />
    </div>
  );
}

export default OtherPage;
