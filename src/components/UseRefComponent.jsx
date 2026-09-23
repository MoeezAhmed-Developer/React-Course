import { useRef } from "react";

function UseRefComponent() {
  const inputRef = useRef(null);
  const inputHandler = () => {
    inputRef.current.focus();
    inputRef.current.placeholder = "This is Ref";
    inputRef.current.style.color = "red";
  };

  return (
    <div>
      <h1>UseRef Hook in React</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={inputHandler}>Focus</button>
    </div>
  );
}

export default UseRefComponent;
