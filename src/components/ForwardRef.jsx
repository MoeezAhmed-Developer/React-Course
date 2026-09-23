import { useRef } from "react";
import InputRef from "./InputRef";

function ForwardRef() {
  const userRef = useRef();

  function handleUserRef() {
    userRef.current.value = "1000";
  }

  return (
    <div>
      <h1>Forward Ref in react</h1>
      <InputRef ref={userRef} />
      <button onClick={handleUserRef}>submit</button>
    </div>
  );
}

export default ForwardRef;
