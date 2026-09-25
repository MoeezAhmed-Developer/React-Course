import Controller from "../components/Controller";
import Skills from "../components/Skills";
import TestComponent from "../components/Test";
import Radio from "../components/radio";
import Dropdown from "../components/Dropdown";
import Loop from "../components/Loop";
import CitiesDisplay from "../components/Cities";
import ReuseLoop from "../components/ReuseLoop";
import Clock from "../components/Clock";
import NestedLopp from "../components/NestedLoop";
import Welcome from "../components/ClassBasedComponent";
import UseEffectCount from "../components/UseEffectCount";
import PropsUseEffect from "../components/PropsUseEffect";

function ServicePage() {
  document.title = "Services | React";

  return (
    <div>
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
    </div>
  );
}

export default ServicePage;
