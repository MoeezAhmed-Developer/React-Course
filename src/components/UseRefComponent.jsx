import { useRef } from "react";

function UseRefComponent() {
  const inputRef = useRef(null);

  const inputHandler = () => {
    inputRef.current.focus();
    inputRef.current.placeholder = "Ref is active";
    inputRef.current.style.color = "red";
  };

  return (
    <div>
      <h1>React useRef Hook</h1>
      <input ref={inputRef} type="text" placeholder="Enter your username" />
      <button onClick={inputHandler}>Activate Ref</button>
    </div>
  );
}

export default UseRefComponent;
