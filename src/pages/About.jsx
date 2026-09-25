import InlineStyle from "../components/InlineStyle";
import DynamicCondInlineStyle from "../components/DCInlineStyle";
import ExternalStyle from "../components/ExternalStyle";
import Random from "../components/Random";
import ReactCard from "../components/ReactCard";
import UserProfile from "../components/UserProfile";
import CssModule from "../components/CssModule";
import StyledComponent from "../components/StyledComponent";
import BootstrapCss from "../components/BootstrapCss";
import StaticExample from "../components/Modal";
import Example from "../components/DemoModal";
import UseRefComponent from "../components/UseRefComponent";
import UnControlledComponent from "../components/UnControlledComp";
import ForwardRef from "../components/ForwardRef";
import UseFormHooks from "../components/UseFormHooks";
import SignUpComponent from "../components/SignupUserComp";

function AboutPage() {
  document.title = "About | React";
  return (
    <div>
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
      <UseRefComponent /> <hr />
      <UnControlledComponent /> <hr />
      <ForwardRef /> <hr />
      <UseFormHooks /> <hr />
      <SignUpComponent /> <hr />
    </div>
  );
}

export default AboutPage;
